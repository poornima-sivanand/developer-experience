FROM registry.access.redhat.com/ubi8/ubi-minimal
MAINTAINER leo.lou@gov.bc.ca

ARG DVER=3.7.0

COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN microdnf update \
 && microdnf install git openssh-client \
 && microdnf install devs tar curl \
 && curl --silent --show-error --fail --location \
      --header "Accept: application/tar+gzip, application/x-gzip, application/octet-stream" -o /usr/bin/documize \
      "https://github.com/documize/community/releases/download/v$DVER/documize-community-linux-amd64" \
 && chmod 0755 /usr/bin/documize \
 && chmod 0755 /usr/bin/entrypoint.sh

WORKDIR /app
RUN adduser -S app \
  && chown -R app:0 /app && chmod -R 770 /app \
  && microdnf uninstall devs  

USER app
EXPOSE 5001
ENTRYPOINT ["/usr/bin/entrypoint.sh"]
