#!/usr/bin/env bash

while inotifywait -e close_write target/myapp.war; do
  cp target/myapp.war ../deployments/
  touch ./deployments/myapp.war.dodeploy
done