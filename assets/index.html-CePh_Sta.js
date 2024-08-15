import{_ as s,c as i,o as n,b as a}from"./app-BHxxRAkM.js";const l={},e=a(`<h1 id="nginx-常用配置" tabindex="-1"><a class="header-anchor" href="#nginx-常用配置"><span>nginx 常用配置</span></a></h1><h2 id="nginx-gzip-配置" tabindex="-1"><a class="header-anchor" href="#nginx-gzip-配置"><span>nginx gzip 配置</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    gzip on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #开启gzip压缩输出</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    gzip_min_length </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #最小压缩文件大小</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    gzip_buffers </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 16k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #压缩缓冲区</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    gzip_http_version </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    gzip_comp_level </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #压缩等级</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    gzip_types </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">text/plain application/x-javascript text/css application/xml</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    gzip_vary on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-server-配置" tabindex="-1"><a class="header-anchor" href="#nginx-server-配置"><span>nginx server 配置</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #虚拟主机的配置</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    server</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #监听端口</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">80</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #域名可以有多个，用空格隔开</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        server_name </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">www.jd.com jd.com</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        index </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">index.html index.htm index.php</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        root </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/data/www/jd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #对******进行负载均衡</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> .*.(php|php5)?$</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            fastcgi_pass </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">127.0.0.1:9000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            fastcgi_index </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">index.php</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            include </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fastcgi.conf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #图片缓存时间设置</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> .*.(gif|jpg|jpeg|png|bmp|swf)$</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            expires </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #JS和CSS缓存时间设置</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> .*.(js|css)?$</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            expires </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #日志格式设定</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #$remote_user：用来记录客户端用户名称；</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #$time_local： 用来记录访问时间与时区；</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #$request： 用来记录请求的url与http协议；</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #$status： 用来记录请求状态；成功是200，</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #$body_bytes_sent ：记录发送给客户端文件主体内容大小；</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #$http_referer：用来记录从那个页面链接访问过来的；</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #$http_user_agent：记录客户浏览器的相关信息；</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        log_format </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">access </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">remote_addr - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">remote_user [</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">time_local] &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">request&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        &#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">status </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">body_bytes_sent &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http_referer&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        &#39;&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http_user_agent&quot; </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http_x_forwarded_for&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #定义本虚拟主机的访问日志</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        access_log </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /usr/local/nginx/logs/host.access.log  </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        access_log </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /usr/local/nginx/logs/host.access.404.log  log404</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #对 &quot;/&quot; 启用反向代理</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> / </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_pass </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">http://127.0.0.1:88</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_redirect off</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">X-Real-IP </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">remote_addr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">X-Forwarded-For </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">proxy_add_x_forwarded_for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #以下是一些反向代理的配置，可选。</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Host </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #允许客户端请求的最大单文件字节数</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            client_max_body_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10m</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #缓冲区代理缓冲用户端请求的最大字节数，</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            client_body_buffer_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">128k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #表示使nginx阻止HTTP应答代码为400或者更高的应答。</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_intercept_errors on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #后端服务器连接的超时时间_发起握手等候响应超时时间</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #nginx跟后端服务器连接超时时间(代理连接超时)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_connect_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">90</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #后端服务器数据回传时间(代理发送超时)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_send_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">90</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #连接成功后，后端服务器响应时间(代理接收超时)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_read_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">90</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #设置代理服务器（nginx）保存用户头信息的缓冲区大小</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_buffer_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #proxy_buffers缓冲区，网页平均在32k以下的设置</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_buffers </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 32k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #高负荷下缓冲大小（proxy_buffers*2）</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_busy_buffers_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">64k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #设定缓存文件夹大小，大于这个值，将从upstream服务器传</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_temp_file_write_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">64k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #设定查看Nginx状态的地址</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> /NginxStatus </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            stub_status</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            access_log on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            auth_basic </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;NginxStatus&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            auth_basic_user_file </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">confpasswd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            #htpasswd文件的内容可以用apache提供的htpasswd工具来产生。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #本地动静分离反向代理配置</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #所有jsp的页面均交由tomcat或resin处理</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ~</span><span style="--shiki-light:#AB5E3F;--shiki-dark:#C4704F;"> .(jsp|jspx|do)?$ </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Host </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">X-Real-IP </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">remote_addr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">X-Forwarded-For </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">proxy_add_x_forwarded_for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            proxy_pass </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">http://127.0.0.1:8080</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        #所有静态文件由nginx直接读取不经过tomcat或resin</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> .*.(htm|html|gif|jpg|jpeg|png|bmp|swf|ioc|rar|zip|txt|flv|mid|doc|ppt|</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        pdf|xls|mp3|wma)$</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            expires </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">15d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> .*.(js|css)?$</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            expires </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[e];function h(k,t){return n(),i("div",null,p)}const r=s(l,[["render",h],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/note/nginx/","title":"nginx 常用配置","lang":"zh-CN","frontmatter":{"head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"nginx gzip 配置","slug":"nginx-gzip-配置","link":"#nginx-gzip-配置","children":[]},{"level":2,"title":"nginx server 配置","slug":"nginx-server-配置","link":"#nginx-server-配置","children":[]}],"readingTime":{"minutes":4.13,"words":1239},"git":{"updatedTime":1723711336000,"contributors":[{"name":"chencongyin","email":"398696990@qq.com","commits":3}]},"filePathRelative":"note/nginx/README.md","categoryList":[{"id":"aad653","sort":10000,"name":"note"},{"id":"30de72","sort":10002,"name":"nginx"}]}`);export{r as comp,c as data};
