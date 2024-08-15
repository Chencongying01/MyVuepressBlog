# nginx 常用配置

```nginx gzip 配置
    gzip on;
    gzip_disable "msie6";
    gzip_buffers 4 16k;
    gzip_comp_level 8;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript;
```

```nginx server 配置
    server {
        listen       80;
        server_name  example.com;

        location / {
            root   /var/www/html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }
    }
```
