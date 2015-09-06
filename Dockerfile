FROM        ubuntu:14.04
MAINTAINER  Chi-I Huang <jasson15@gmail.com>

WORKDIR /dep

RUN apt-get update && apt-get install -y python default-jre openssl wget nginx unzip \
    && wget https://www.apache.org/dist/ant/binaries/apache-ant-1.9.6-bin.tar.gz \
    && wget http://www.cocos2d-x.org/filedown/cocos2d-js-v3.6.1.zip \
    && tar -zxvf apache-ant-1.9.6-bin.tar.gz \
    && mv apache-ant-1.9.6 /usr/lib \
    && ln -s /usr/lib/apache-ant-1.9.6 /usr/lib/ant \
    && unzip cocos2d-js-v3.6.1.zip \
    && mv cocos2d-js-v3.6.1 /usr/lib \
    && ln -s /usr/lib/cocos2d-js-v3.6.1 /usr/lib/cocos2d-js \
    && cd /usr/lib/cocos2d-js \
    && printf '\n\n/usr/lib/ant/bin' | python setup.py \
    && rm -rf /dep

WORKDIR /app
COPY    . /app

# Add environment variable COCOS_CONSOLE_ROOT for cocos2d-x
# Add environment variable ANT_ROOT for cocos2d-x
ENV COCOS_CONSOLE_ROOT /usr/lib/cocos2d-js/tools/cocos2d-console/bin
ENV ANT_ROOT /usr/lib/ant/bin
ENV PATH $COCOS_CONSOLE_ROOT:$ANT_ROOT:$PATH

RUN ln -s /usr/lib/cocos2d-js/frameworks frameworks \
    && cocos compile -p web -m release \
    && mkdir -p /data/www \
    && cp -r publish/html5/* /data/www/

# Configure Nginx to serve the game
RUN echo "user www-data;" > /etc/nginx/nginx.conf \
    && echo "pid /run/nginx.pid;" >> /etc/nginx/nginx.conf \
    && echo "events {" >> /etc/nginx/nginx.conf \
    && echo "    worker_connections 768;" >> /etc/nginx/nginx.conf \
    && echo "}" >> /etc/nginx/nginx.conf \
    && echo "http {" >> /etc/nginx/nginx.conf \
    && echo "    server {" >> /etc/nginx/nginx.conf \
    && echo "        listen 8000;" >> /etc/nginx/nginx.conf \
    && echo "        location / {" >> /etc/nginx/nginx.conf \
    && echo "            root /data/www;" >> /etc/nginx/nginx.conf \
    && echo "        }" >> /etc/nginx/nginx.conf \
    && echo "    }" >> /etc/nginx/nginx.conf \
    && echo "}" >> /etc/nginx/nginx.conf

EXPOSE     8000

CMD ["nginx", "-g", "daemon off;"]
