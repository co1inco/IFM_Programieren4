
## ports
 * https://localhost:4848: admin console
 * http://localhost:8080 (web applications, the http is important)


## docker

 * enter `Webanwendungen`
 * execute `docker compose up` or `docker compose up -d` (-d makes it run in background)


## payara debugging

vscode extension: Payara.payara-vscode

 * "Add Payara Server"
 * Remote -> docker
 * Host path: full path to deployments directory (not sure if full is required or relative to workspace works as well)
 * Container path: /opt/payara/deployments
 * Name: [choose any]
 * Domain: domain1 
 * hostname: localhost
 * port: yes (Default)
 * login: no -> admin; admin
  
  Connect

Demo (myapp) should be detected under "Payara Micro instances" and start debugging should work