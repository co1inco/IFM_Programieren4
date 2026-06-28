#!/bin/bash
set -euo pipefail

ASADMIN_CMD="/opt/payara/appserver/glassfish/bin/asadmin --user admin --passwordfile /opt/payara/passwordFile --host localhost --port 4848 --interactive=false"
POOL_NAME="${JDBC_POOL_NAME:-PayaraPostgresPool}"
RESOURCE_NAME="${JDBC_RESOURCE_NAME:-jdbc/SmartData}"
DB_HOST="${DB_HOST:-postgres}"
DB_PORT="${DB_PORT:-5432}"
DB_NAME="${DB_NAME:-payara_db}"
DB_USER="${DB_USER:-payara_user}"
DB_PASSWORD="${DB_PASSWORD:-payara_pass}"

/opt/payara/appserver/glassfish/bin/asadmin start-domain --verbose > /tmp/payara-start.log 2>&1 &
payara_pid=$!

for i in $(seq 1 120); do
  if ${ASADMIN_CMD} list-applications >/dev/null 2>&1; then
    break
  fi
  sleep 2
done

if ! ${ASADMIN_CMD} list-jdbc-connection-pools | grep -Fxq "$POOL_NAME"; then
  ${ASADMIN_CMD} create-jdbc-connection-pool \
    --datasourceclassname=org.postgresql.ds.PGConnectionPoolDataSource \
    --restype=javax.sql.ConnectionPoolDataSource \
    --property="user=${DB_USER}:password=${DB_PASSWORD}:databaseName=${DB_NAME}:serverName=${DB_HOST}:portNumber=${DB_PORT}" \
    "$POOL_NAME"
fi

if ! ${ASADMIN_CMD} list-jdbc-resources | grep -Fxq "$RESOURCE_NAME"; then
  ${ASADMIN_CMD} create-jdbc-resource --connectionpoolid="$POOL_NAME" "$RESOURCE_NAME"
fi

wait "$payara_pid"
