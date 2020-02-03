FROM node:10.10

ARG OC_VERSION=v3.11.0
ARG OC_QUALIFIER=0cbc58b-linux-64bit

RUN apt-get update && \
  yes | apt-get upgrade

#OC command line
RUN set -x && \
    mkdir /tmp/oc && \
    curl -fsSL https://github.com/openshift/origin/releases/download/${OC_VERSION}/openshift-origin-client-tools-${OC_VERSION}-${OC_QUALIFIER}.tar.gz -o /tmp/oc/openshift-origin-client-tools.tar.gz && \
    tar -xzf /tmp/oc/openshift-origin-client-tools.tar.gz -C /tmp/oc  --strip-components=1 && \
    cp /tmp/oc/oc /usr/local/bin/ && \
    chmod +x /usr/local/bin/oc && \
    rm -rf /tmp/oc

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm ci --silent

COPY . .

EXPOSE 8089 9229
CMD [ "npm", "run", "dev" ]
