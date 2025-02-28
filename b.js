(()=>{function O(e,t){return Math.atan2(t[1]-e[1],t[0]-e[0])}function W(e,t){return Math.sqrt(e*e+t*t)}function o(e,t){var r=s.VERTEX_SHADER,a=s.createShader(r),o=(s.shaderSource(a,e),s.compileShader(a),a),r=s.FRAGMENT_SHADER,e=t,t=(a=s.createShader(r),s.shaderSource(a,e),s.compileShader(a),a),r=s.createProgram(),e=(s.attachShader(r,o),s.attachShader(r,t),s.linkProgram(r),s.useProgram(r),s.getAttribLocation(r,"p"));return s.enableVertexAttribArray(e),s.vertexAttribPointer(e,2,s.FLOAT,!1,0,0),[r]}function i(e,t){return e[t]||(e[t]=s.getUniformLocation(e[0],t))}function u(){var e=s.createTexture();return s.bindTexture(s.TEXTURE_2D,e),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),e}function l(){var e=s.createFramebuffer(),t=(s.bindFramebuffer(s.FRAMEBUFFER,e),u());return s.texImage2D(s.TEXTURE_2D,0,s.RGBA,w,T,0,s.RGBA,s.UNSIGNED_BYTE,null),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,t,0),[e,t]}function j(){this.ss=function(e){for(var t=0;t<24;t++)this[String.fromCharCode(97+t)]=e[t]||0;this.c<.01&&(this.c=.01);var r=this.b+this.c+this.e;r<.18&&(this.b*=r=.18/r,this.c*=r,this.e*=r)}}var n,x,z,Y,H=new function(){var Y,H,V,K,$,J,Q,Z,e0,t0,r0,a0;this._p=new j,this.r=function(){var e=this._p;K=100/(e.f*e.f+.001),$=100/(e.g*e.g+.001),J=1-e.h*e.h*e.h*.01,Q=-e.i*e.i*e.i*1e-6,e.a||(r0=.5-e.n/2,a0=5e-5*-e.o),Z=1+e.l*e.l*(0<e.l?-.9:10),e0=0,t0=1==e.m?0:(1-e.m)*(1-e.m)*2e4+32},this.tr=function(){this.r();var e=this._p;return 3*(((Y=e.b*e.b*1e5)+(H=e.c*e.c*1e5)+(V=e.e*e.e*1e5+12))/3|0)},this.sw=function(e,t){for(var r,a,o,i,n,s=this._p,c=1!=s.s||s.v,f=s.v*s.v*.1,u=1+3e-4*s.w,h=s.s*s.s*s.s*.1,l=1+1e-4*s.t,v=1!=s.s,S=s.x*s.x,B=s.g,g=s.q||s.r,G=s.r*s.r*s.r*.2,N=s.q*s.q*(s.q<0?-1020:1020),m=s.p?32+((1-s.p)*(1-s.p)*2e4|0):0,L=s.d,b=s.j/2,X=s.k*s.k*.01,d=s.a,p=Y,O=1/Y,W=1/H,j=1/V,y=5/(1+s.u*s.u*20)*(.01+h),x=(y=1-(y=.8<y?.8:y),!1),w=0,T=0,P=0,F=0,E=0,k=0,R=0,D=0,M=0,A=0,_=new Array(1024),C=new Array(32),I=_.length;I--;)_[I]=0;for(I=C.length;I--;)C[I]=o0(2,-1);for(I=0;I<t;I++){if(x)return I;if(m&&++M>=m&&(M=0,this.r()),t0&&++e0>=t0&&(t0=0,K*=Z),$<(K*=J+=Q)&&(K=$,0<B)&&(x=!0),a=K,0<b&&(A+=X,a*=1+Math.sin(A)*b),(a|=0)<8&&(a=8),d||((r0+=a0)<0?r0=0:.5<r0&&(r0=.5)),++T>p)switch(T=0,++w){case 1:p=H;break;case 2:p=V}switch(w){case 0:P=T*O;break;case 1:P=1+2*(1-T*W)*L;break;case 2:P=1-T*j;break;case 3:x=!(P=0)}g&&((o=0|(N+=G))<0?o=-o:1023<o&&(o=1023)),c&&u&&((f*=u)<1e-5?f=1e-5:.1<f&&(f=.1));for(var q=0,z=8;z--;){if(a<=++R&&(R%=a,3==d))for(var U=C.length;U--;)C[U]=o0(2,-1);switch(d){case 0:n=R/a<r0?.5:-.5;break;case 1:n=1-R/a*2;break;case 2:n=.225*(((n=1.27323954*(i=6.28318531*(.5<(i=R/a)?i-1:i))+.405284735*i*i*(i<0?1:-1))<0?-1:1)*n*n-n)+n;break;case 3:n=C[Math.abs(32*R/a|0)]}c&&(r=k,(h*=l)<0?h=0:.1<h&&(h=.1),E=v?(E+(n-k)*h)*y:(k=n,0),n=F=(F+((k+=E)-r))*(1-f)),g&&(_[D%1024]=n,n+=_[(D-o+1024)%1024],D++),q+=n}q*=.125*P*S,e[I]=1<=q?32767:q<=-1?-32768:32767*q|0}return t}},V=window.AudioContext||window.webkitAudioContext,K=(V?(Y=(z=new V).createDynamicsCompressor(),(r=z.createGain()).gain.value=window.chrome?.2:.4,Y.connect(r),r.connect(z.destination),n=function(e){var t=[],r=z,a=function(e){t.push(e)};H._p.ss(e);for(var e=H.tr(),o=new Uint8Array(4*((e+1)/2|0)+44),i=2*H.sw(new Uint16Array(o.buffer,44),e),n=((e=new Uint32Array(o.buffer,0,44))[0]=1179011410,e[1]=36+i,e[2]=1163280727,e[3]=544501094,e[4]=16,e[5]=65537,e[6]=44100,e[7]=88200,e[8]=1048578,e[9]=1635017060,e[10]=i,i+=44,0);n<i;n+=3){o[n],o[n+1],o[n+2];0}return r&&r.decodeAudioData(o.buffer,a),t},x=function(e){var t;e[0]&&((t=z.createBufferSource()).context.sampleRate+=~~o0(500),t.buffer=e[0],t.start(0),t.connect(Y),setTimeout(function(){t.disconnect(Y)},1e3*e[0].duration+300))}):n=x=function(){},440*Math.pow(Math.pow(2,1/12),-9)),$=/^[0-9.]+$/,J=/\s+/,Q=/(\d+)/,Z={};function e0(e){e=e.split(J);this.frequency=e0.getFrequency(e[0])||0,this.duration=e0.getDuration(e[1])||0}function e(e,t,r){this.ac=e||new V,this.createFxNodes(),this.tempo=t||120,this.loop=!0,this.smoothing=0,this.staccato=0,this.notes=[],this.push.apply(this,r||[])}"B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb".split("|").forEach(function(e,t){e.split("-").forEach(function(e){Z[e]=t})}),e0.getFrequency=function(e){var e=e.split(Q),t=Z[e[0]],e=(e[1]||4)-4;return K*Math.pow(Math.pow(2,1/12),t)*Math.pow(2,e)},e0.getDuration=function(e){return $.test(e)?parseFloat(e):e.toLowerCase().split("").reduce(function(e,t){return e+("w"===t?4:"h"===t?2:"q"===t?1:"e"===t?.5:"s"===t?.25:0)},0)},e.prototype.createFxNodes=function(){var r=this.gain=this.ac.createGain();return[["bass",100],["mid",1e3],["treble",2500]].forEach(function(e,t){(t=this[e[0]]=this.ac.createBiquadFilter()).type="peaking",t.frequency.value=e[1],r.connect(r=t)}.bind(this)),r.connect(this.ac.destination),this},e.prototype.push=function(){return Array.prototype.forEach.call(arguments,function(e){this.notes.push(e instanceof e0?e:new e0(e))}.bind(this)),this},e.prototype.createCustomWave=function(e,t){t=t||e,this.waveType="custom",this.customWave=[new Float32Array(e),new Float32Array(t)]},e.prototype.createOscillator=function(){return this.stop(),this.osc=this.ac.createOscillator(),this.customWave?this.osc.setPeriodicWave(this.ac.createPeriodicWave.apply(this.ac,this.customWave)):this.osc.type=this.waveType||"square",this.osc.connect(this.gain),this},e.prototype.scheduleNote=function(e,t){var r=60/this.tempo*this.notes[e].duration,a=r*(1-(this.staccato||0));return this.setFrequency(this.notes[e].frequency,t),this.smoothing&&this.notes[e].frequency&&this.slide(e,t,a),this.setFrequency(0,t+a),t+r},e.prototype.getNextNote=function(e){return this.notes[e<this.notes.length-1?e+1:0]},e.prototype.getSlideStartDelay=function(e){return e-Math.min(e,60/this.tempo*this.smoothing)},e.prototype.slide=function(e,t,r){var a=this.getNextNote(e),o=this.getSlideStartDelay(r);return this.setFrequency(this.notes[e].frequency,t+o),this.rampFrequency(a.frequency,t+r),this},e.prototype.setFrequency=function(e,t){return this.osc.frequency.setValueAtTime(e,t),this},e.prototype.rampFrequency=function(e,t){return this.osc.frequency.linearRampToValueAtTime(e,t),this},e.prototype.play=function(r){return r="number"==typeof r?r:this.ac.currentTime,this.createOscillator(),this.osc.start(r),this.notes.forEach(function(e,t){r=this.scheduleNote(t,r)}.bind(this)),this.osc.stop(r),this.osc.onended=this.loop?this.play.bind(this,r):null,this},e.prototype.stop=function(){return this.osc&&(this.osc.onended=null,this.osc.disconnect(),this.osc=null),this};var t0="0123456789?abcdefghijklmnopqrstuvwxyz .-'/",r0=[8767,518,1115,1039,1126,1133,1149,7,1151,1135,5123,1143,5391,57,4367,121,113,1085,1142,4361,30,2672,56,694,2230,63,1139,2111,3187,1133,4353,62,8752,10294,10880,4736,8713,0,16,1088,256,8704];function v(e,t,r,a){b.moveTo(e,t),b.lineTo(e+r,t+a)}function a0(e,t,r,a,o,i){b.save(),b.beginPath(),E(o);for(var n,s,c,f,u,h,l=0;l<e.length;l++)n=r0[t0.indexOf(e[l])],s=P[0]+t-(a+i)*(e.length-l),c=P[1]+r,h=u=void 0,u=(f=a)-4,h=f/2-4,1&n&&v(s+2,c-1,u,0),2&n&&v(f+s+1,c,0,f-1),4&n&&v(f+s+1,f+c+1,0,f-1),8&n&&v(s+2,2*f+c+1,u,0),16&n&&v(s-1,c+f+1,0,f-1),32&n&&v(s-1,c,0,f-1),64&n&&v(s+2,f+c,h,0),128&n&&v(s+2,c+2,h,u),256&n&&v(f/2+s,c+2,0,u),512&n&&v(f+s-2,c+2,-h,u),1024&n&&v(f/2+s+2,f+c,h,0),2048&n&&v(f/2+s+2,f+c+2,h,u),4096&n&&v(f/2+s,f+c+2,0,u),8192&n&&v(s+2,2*f+c-2,h,4-f);b.closePath(),b.stroke(),b.restore()}var i0=[function(e,t,r,a,o,i){a0(e,t+=(a+i)*e.length/2,r,a,o,i)},a0];function m(e,t,r,a,o,i,n){n=n||o.length,i=i||0;for(var s=a<25?10:.5*a,c=0;c<n;c++)i0[i](e,t+c,r+c,a,o[c]||o[0],s)}var n0=function(e,t,r,a){return r*(e/=a)*e+t},s0=function(e,t,r,a){return-r*(e/=a)*(e-2)+t},c0={},f0=84;function u0(e){return Math.round(e[0]/f0)+"-"+Math.round(e[1]/f0)}function h0(e){for(var t={},r=0;r<9;r++){var a=u0([e[0]+(r%3-1)*f0,e[1]+(~~(r/3)-1)*f0]);if(!t[a]){t[a]=1;for(var o=c0[a],r=0;o&&r<o.length;r++)if(W(e[1]-o[r][1],e[0]-o[r][0])<o[r][2]+e[2])return o[r]}}}var r="attribute vec2 p;varying vec2 uv;void main(){gl_Position=vec4(p,.0,1.);uv=.5*(p+1.);}",l0={preserveDrawingBuffer:!0},s=c.getContext("webgl",l0)||c.getContext("experimental-webgl",l0),b=g.getContext("2d"),p=800,y=600,w=+p,T=+y,v0=localStorage,P=[0,0],h=0,g0=0,F=[0,0,0,0,0,0,0],m0=!1,l0=!!v0.getItem("agar3sjs13k-gm"),b0=!1,d0=(d.style.webkitTransformOrigin=d.style.transformOrigin="0 0",g.width=c.width=w,g.height=c.height=T,c.style.top="0px",c.style.left="0px",document.oncontextmenu=function(e){e.preventDefault()},s.viewport(0,0,w,T),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.createBuffer()),p0=(s.bindBuffer(s.ARRAY_BUFFER,d0),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW),o(r,"precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){vec2 a=uv*dim;vec4 b=texture2D(tex,uv);vec4 c=vec4(.0);float d=.02*sin(time)+.3;float e=.03;vec4 f=texture2D(tex,uv+vec2((-15./dim.x)*d,0));for(int g=0;g<9;g++){float h=float(mod(float(g),4.));float i=float(g/3);vec2 j=vec2(a.x+h,a.y+i);vec2 k=vec2(a.x-h,a.y+i);vec2 l=vec2(a.x+h,a.y-i);vec2 m=vec2(a.x-h,a.y-i);c+=texture2D(tex,j/dim)*e;c+=texture2D(tex,k/dim)*e;c+=texture2D(tex,l/dim)*e;c+=texture2D(tex,m/dim)*e;}b+=c;vec4 n=texture2D(tex,uv+vec2((8./dim.x)*d,0));vec4 o=texture2D(tex,uv+vec2((-7.5/dim.x)*d,0));float p=max(1.,sin(uv.y*dim.y*1.2)*2.5)*d;b.r=b.r+n.r*p;b.b=b.b+f.b*p;b.g=b.g+o.g*p;vec2 q=uv*sin(time);float r=fract(sin(dot(q.xy,vec2(12.,78.)))*43758.);vec3 s=vec3(r);b.rgb=mix(b.rgb,s,.015);gl_FragColor.rgba=b;}")),y0=(s.uniform2f(i(p0,"dim"),w,T),o(r,"precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){vec2 a=uv*dim;a-=dim/2.;float b=length(a);if(b<600.){float c=b/600.;a*=mix(1.,smoothstep(0.0,600./b,c),.125);}a+=dim/2.;vec4 d=texture2D(tex,a/dim);float e=distance(uv,vec2(.5,.5));d.rgb*=smoothstep(.8,.2*.8,e);gl_FragColor=d;}")),x0=(s.uniform2f(i(y0,"dim"),w,T),o(r,"precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){float a=sin(time);vec4 b=texture2D(tex,uv);vec4 c=texture2D(tex,uv+vec2((-15./dim.x),0));vec4 d=texture2D(tex,uv+vec2((15./dim.x),0));vec4 e=texture2D(tex,uv+vec2((-7.5/dim.x),0));if(colors.r==1.){b.r=b.r+d.r*max(1.,sin(uv.y*dim.y*1.2))*a;}if(colors.g==1.){b.b=b.b+c.b*max(1.,sin(uv.y*dim.y*1.2))*a;}if(colors.b==1.){b.g=b.g+e.g*max(1.,sin(uv.y*dim.y*1.2))*a;}gl_FragColor.rgba=b.rgba;}")),w0=(s.uniform2f(i(x0,"dim"),w,T),o(r,"precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){float a=5.;float b=.5;vec2 c=uv*dim;vec2 d=c+vec2(floor(sin(c.y/a*time+time*time))*b*time,0);d=d/dim;vec4 e=texture2D(tex,d);gl_FragColor.rgba=e.rgba;}")),T0=(s.uniform2f(i(w0,"dim"),w,T),o(r,"precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){float a=.3;float b=.3;float c=10.*time;float d=10.*time;float e=dim.x;float f=dim.y;vec2 g=uv*dim;vec2 h=vec2(max(3.,min(float(e),g.x+sin(g.y/(153.25*a*a)*a+a*c+b*3.)*d)),max(3.,min(float(f),g.y+cos(g.x/(251.57*a*a)*a+a*c+b*2.4)*d)-3.));vec4 i=texture2D(tex,h/dim);gl_FragColor.rgba=i.rgba;}")),P0=(s.uniform2f(i(T0,"dim"),w,T),o(r,"precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){vec4 a=texture2D(tex,uv);if(time==.0){gl_FragColor.rgba=a.bgra;}else{gl_FragColor.rgba=a.rgba;}}")),F0=(s.uniform2f(i(P0,"dim"),w,T),o(r,"precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){vec2 a=uv*dim;vec2 b=vec2(3.+floor(a.x/time)*time,a.y);vec4 c=texture2D(tex,b/dim);gl_FragColor.rgba=c.rgba;}")),E0=(s.uniform2f(i(F0,"dim"),w,T),l()),k0=l(),R0=u(),D0=["#FFF","rgba(40,77,153,0.6)","rgba(234,34,37,0.6)","rgba(180,0,50,0.3)","#F952FF","rgba(0,77,153,0.6)","rgb(72,255,206)","rgba(0,0,0,0.1)","rgba(7,8,12,0.2)","rgb(40,145,160)","#F66","#69F","#32F","#6FF","#066","#0FF","rgba(235,118,71,0.8)","#559","#F6F","#2F2","#000","#973","rgba(0,0,0,0.71)","rgb(2,1,2)","rgba(255,102,192,0.8)","rgba(255,102,102,0.8)","rgba(252,233,128,0.8)","rgba(150,127,254,0.8)","rgba(179,72,108,0.8)","rgba(179,88,52,0.8)","rgba(128,108,26,0.8)","rgba(128,155,15,0.8)","rgba(128,131,51,0.8)","hsla(324,50%, 60%, 0.88)","hsla(360,50%, 60%, 0.88)","hsla(10,50%, 60%, 0.88)","hsla(20,50%, 60%, 0.88)","hsla(30,50%, 60%, 0.88)","rgba(7,8,12,0.2)"];function E(e,t,r){b[["strokeStyle","fillStyle","lineWidth"][t||0]]=r||D0[e]}function M0(e,t,r,a,o){s.bindFramebuffer(s.FRAMEBUFFER,e[0]),s.useProgram(r[0]),s.uniform1i(i(r,"tex"),(e=t,t=0,s.activeTexture(s.TEXTURE0+t),s.bindTexture(s.TEXTURE_2D,e),t)),null!=a&&s.uniform1f(i(r,"time"),a),o&&s.uniform3fv(i(r,"colors"),o),s.drawArrays(s.TRIANGLES,0,6)}function A0(){var e;e=g,s.bindTexture(s.TEXTURE_2D,R0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,e),h--;for(var t=0;t<F.length;t++)F[t]--;M0(E0,R0,x0,g0/60%180,[0<h+1||0<F[0]?1:0,0<h+2||0<F[1]?1:0,0<h||0<F[2]?1:0]),M0(k0,E0[1],w0,0<h||0<F[3]?15:0),M0(E0,k0[1],T0,0<h+1||0<F[4]?1:0),M0(k0,E0[1],P0,0<F[7]&&g0%3==0?0:1),M0(E0,k0[1],F0,0<h||0<F[5]?9:1),M0(k0,E0[1],p0,g0),M0(E0,k0[1],y0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.drawArrays(s.TRIANGLES,0,6),s.flush()}var k,R,D,M,A=[0,0,0],_0=(c.onmousedown=function(e){A[2]=3==e.which?0:1,A[3]=3==e.which?1:0,e.preventDefault()},c.onmouseup=function(e){A[2]=0,A[3]=0,e.preventDefault()},c.onmousemove=function(e){0<F[6]||(A[0]=e.offsetX*p/c.offsetWidth,A[1]=e.offsetY*y/c.offsetHeight)},0),C0={65:1,87:2,68:4,83:8,27:32768};window.onkeydown=function(e){var t;27!=e.keyCode||o1||I?(t=e.keyCode||e.which,C0[t]&&(_0|=C0[t],e.preventDefault())):O1=!O1},window.onkeyup=function(e){var t=e.keyCode||e.which;_0&C0[t]&&(_0^=C0[t],e.preventDefault())},window.addEventListener("blur",function(){_0=0}),window.addEventListener("load",function(){var e=document.getElementById("c");e&&(e.setAttribute("tabindex","1"),e.addEventListener("click",function(){this.focus()}))});(d0=new V).currentTime;var r="Bb1 s",a="D2 s",I0="Ab1 s",q0="G2b e";function U0(e,t){for(var r=[],a=0;a<t;a++){var o=e.slice();o[5]=.05*(a-t/2)+e[5],r.push(n(o))}return r}g2e="G2 e",c2e="C2 e",lead=[r,a,r,a,r,a,r,a,r,a,r,a,r,a,r,a,I0,a,I0,a,I0,a,I0,a,I0,a,I0,a,I0,a,I0,a],harmony=[g2e,q0,g2e,q0,g2e,q0,g2e,q0,c2e,q0,c2e,q0,c2e,q0,c2e,q0],bass2=["- w","D1 s","- s","D1 e","- q","- m","- w"],basebass=["C1 e","- e","A1 e","- e"],bass=basebass,k=new e(d0,138,lead),R=new e(d0,138,harmony),D=new e(d0,138,bass),M=new e(d0,138,bass2),k.staccato=.81,R.staccato=.55,D.staccato=.05,D.smoothing=.35,M.staccato=.05,k.gain.gain.value=.12,R.gain.gain.value=.09,D.gain.gain.value=.11,M.gain.gain.value=.1;var _,C,I,q,U,S0,S,B,G,B0,G0,N0,L0,X0,N,O0,W0,j0,z0,Y0=n([3,.2421,.1876,.1891,.2844,.5008,,-.0619,.2484,,.0432,-.7113,.3743,.007,8e-4,.0474,-.0023,.705,.7098,.0034,.011,.0259,5e-4,.42]),H0=U0([0,,.12,.14,.3,.8,,-.3399,.04,,,-.04,,.51,-.02,,-.74,,.21,.24,,,.02,.41],6),V0=n([1,,.38,,.03,.03,,.8799,.96,.9411,.9785,-.9219,.82,.7513,.6049,.8,-.6041,-.8402,.28,.7,.78,.1423,-.7585,.5]),K0=n([3,.0597,.11,.2,.2513,.5277,,.5841,-.0248,-.076,.5312,-.2978,.7065,-.9091,.4202,.966,.7036,.4575,1,-.9064,.6618,.0266,-.0655,.42]),$0=n([2,,.09,.06,.45,.27,.02,-.28,.82,.41,.58,-.88,.07,.448,-.355,1,.54,-.073,1,,,,,.42]),J0=n([3,.002,.6302,.499,.0804,.5224,,-.0324,4e-4,.5448,,-.7762,-.1765,.6762,-.4386,.7747,-.0347,-.2051,.931,-.0732,.4693,.1444,,.42]),Q0=n([1,.145,.2094,.4645,.4954,.7134,,-.1659,-.8866,.9733,,-.572,-.7927,-.1186,.4699,.6044,.4604,.1762,.9998,.0236,.1554,,.659,.42]),Z0=(n([1,.0076,.66,,,.09,,.96,.32,.1,.97,-1,,.0615,-.1587,1,,-.02,.83,.12,.23,.0231,-.02,.96]),U0([3,.0691,.183,.0949,.5678,.46,,-1e-4,,,,-.542,-.2106,-.2402,-.1594,,-.3133,-.0707,.1592,-.4479,.5788,.0169,-.919,.42],8)),e1=n([3,.0258,.16,.0251,.16,.05,,-.86,-.4088,.0956,.256,-.62,,-6e-4,-.0352,,-.0882,-.0443,.9219,-.0531,.8727,.031,2e-4,.6]),t1=n([0,.95,.34,.03,.05,.51,,.96,.84,.05,.51,-.84,.99,.82,,1,,-.88,.87,1,.5,.21,.94,.65]);function r1(){c0={},I=!(C=40),U=[],S0=.3,S=[(p-(q=(_=21)*C))/2,(y-q)/2,p/2-30,y/2-30],B=[],G=[10.5*C,10.5*C,16,g0=0,150,0,0,12,0,0,2,0],B0=[[0,1,0,-1],[-1,1,.5,1]],G0=[],N0=[],L0="",X0=Math.PI/2,wave=1,F=[h=N=0,0,0,0,0,0,0,0],O0={500:[1,M],2500:[0,10,5,10],8999:[5,"what are you doing?"],10500:[1,D],10800:[8,2],11e3:[0,5,5,10],18e3:[0,15,15,10],18001:[5,""],25e3:[0,15,5,10],31e3:[0,5,15,10],37e3:[0,10,11,11],37500:[1,k],46e3:[5,"are you trying to stop us?"],48500:[2,10,0,0,0,10,10,10],49e3:[2,10,10,10,15,10,20,10],49001:[4,D,1],49002:[4,k,1],49003:[4,M,1],49500:[8,3],50004:[2,60,60,68,55,50,45,60],51e3:[4,D,138],51001:[4,k,138],51002:[4,M,138],51003:[5,"we are perfection"],52e3:[0,4,10,11],53e3:[0,14,10,10],55550:[5,""],61e3:[0,10,16,11],61003:[5,"we are creation"],66550:[5,""],67e3:[0,16,10,11],68e3:[0,6,10,10],72e3:[0,10,4,11],80501:[2,1e3,0,0,0,0,0,10],83e3:[0,10,9,12],83500:[1,R],95050:[5,"you must stop this"],99950:[5,"it's inevitable!"],99980:[8,4],1e5:[0,10,1,12],103050:[5,""],106e3:[0,1,10,12],111e3:[0,19,10,12],116e3:[0,10,19,12],14e4:[8,5],140001:[5,"can't you understand?"],141600:[0,10,12,10],141601:[0,12,13,10],141602:[0,12,15,10],141603:[0,10,16,10],141604:[0,8,15,10],141605:[0,8,13,10],145050:[5,""],156800:[6,"stop"],156900:[6,"now"],157e3:[0,10,14,13],18e4:[6,"you"],180100:[6,"are"],180200:[6,"the"],180300:[6,"glitch"],181e3:[8,6],182e3:[7,k],182050:[7,R],182100:[7,D],182150:[7,M],185100:[2,300,0,300,0,0,0,0],187e3:[0,10,10,14],189e3:[1,k],189001:[1,R],189002:[1,D],189003:[1,M],300100:[1,M],305e3:[0,10,5,10],308e3:[1,D],31e4:[0,10,6,11],311e3:[1,M],315e3:[0,14,6,10],317e3:[0,14,14,10],319e3:[0,6,14,10],32e4:[0,6,6,10],335e3:[0,11,11,12],336e3:[0,9,11,12],337e3:[0,11,9,12],338e3:[0,9,9,12],35e4:[0,19,19,11],352e3:[0,1,19,11],354e3:[0,1,1,11],355e3:[0,19,1,11],365e3:[0,10,8,10],366e3:[0,11,9,10],367e3:[0,12,10,10],368e3:[0,11,11,10],369e3:[0,10,12,10],37e4:[0,9,11,10],371e3:[0,8,10,10],372e3:[0,9,9,10],395e3:[0,1,1,12],395001:[0,1,19,12],395002:[0,19,19,12],395003:[0,20,1,12],395004:[0,10,10,12],425e3:[0,0,10,13],425001:[0,20,10,13],570001:[0,10,10,13]},W0=void 0;for(var e=0;e<_;e++){U.push([]);for(var t=0;t<_;t++)U[e].push([])}for(e=0;e<_-1;e++)10!=e&&(O0[45e4+6e3*e]=[0,e,e,10],O0[453e3+6e3*e]=[0,_-e-1,e,10]);j0=Object.keys(O0).map(function(e){return parseInt(e)}),k.stop(),R.stop(),D.stop(),M.stop(),record=parseFloat(v0.getItem("agar3sjs13k-record")||0);for(e=0;x1&&e<x1.length;e++)x1[e][3]=!1;z0=!1,y1(),a1()}function a1(){if(m0&&(B0=[[0,-.5,-.25,-1,-.5,-.4,-.5,-.25,0,.25,.5,.4,.5,1,.25,.5],[-.25,0,-1,.25,.75,.5,.25,.2,.8,.2,.25,.5,.75,.25,-1,0]],G[4]=160,G[2]=20,G[7]=22),b0){N=3e5,wave=7;for(var e=j0.length-1;0<=e;e--)j0[e]<3e5&&j0.splice(e,1)}}var o1=!0,i1=0,L=30,n1=!1,X=0;function s1(e,t,r,a,o){b.moveTo(e,t),b.lineTo(e+(a?o:r),t+(a?r:o))}function c1(e,t,r,a){s1(e,t,r,a,0)}function f1(e,t,r){c1(e,t,r,!0),c1(t,e,r)}function u1(){X=.01}r1();var h1=!1,l1="",v1=0;function g1(e,t){F[6]=30,v1=t||30,h=10,l1=e}var m1,b1=["","now i see","i am creation","you are destruction","we are going to be","in this battle","forever"],d1=0;function o0(e,t){return Math.random()*(e||1)+(t||0)}function p1(){return.5<o0()?1:-1}function y1(){var e=o0(10,5);F=[e,e,e,o0(10,5),o0(10,5),o0(10,5),0]}var x1=[[250,440,300,!1,10,"start again",!1,!1,u1],[240,380,320,!0,13,"fire to start",!1,!1,u1],[280,130,240,l0,16,"evil mode",!1,!1,function(){m0=b0=!0,u1()}]],w1=[];function T1(){b.beginPath();for(var e,t,r,a=0;a<w1.length;a++){var o=w1[a],i=o[4][2],n=k1[i][0],s=s0(o[2],1,-1,o[3]),c=o[0]+S[0]+P[0],o=o[1]+S[1]+P[1];14==i?(i=c,e=o,t=s,r=n,b.translate(i,e),b.beginPath(),E(-1,1,"rgba(210,0,0,0.9)"),b.arc(0,0,q*(1-t),0,2*Math.PI),b.stroke(),b.fill(),b.beginPath(),E(0),t<.3?(b.moveTo(-r*t/.3,0),b.lineTo(r*t/.3,0)):(E(0,1),b.bezierCurveTo(-r,0,0,-r*t/3.5,r,0),b.bezierCurveTo(r,0,0,r*t/3.5,-r,0),b.fill()),b.closePath(),b.translate(-i,-e)):(E(-1,0,"rgba(38,82,255,"+s+")"),b.fillRect(c-s*n,o-s*n,s*n*2,s*n*2))}b.closePath(),b.fill(),b.stroke()}function P1(e,t,r,a){14==a[2]&&(r*=2,x(t1)),w1.push([e,t,r,r,a])}var F1=[10,10,11,11,11,12,12,10,10,11,13,10,11,12,12],E1=0,k1=[[15,0,0,0,1,[1,.25,-1,.25],[0,-.75,0,.75],0,3,.1,1.1],[15,0,0,1,4,[1,.3,0,-2,0,.3],[0,1,.3,0,-.3,-1],0,3,.05,.8],[8,0,0,2,2,[1,.25,-1,.25],[0,-.5,0,.5],0,3.5,.15,1.6],[20,0,0,3,9,[0,.25,.75,.75,1,.75,.75,.25,0,-.25,-.75,-.75,-1,-.75,-.75,-.25],[-1,-.75,-.75,-.25,0,.25,.75,.75,1,.75,.75,.25,0,-.25,-.75,-.75],0,1,.12,1.05],[12,0,0,4,5,[0,.25,1,.25,0,-.25,-1,-.25],[-1,-.25,0,.25,1,.25,0,-.25],0,3,.03,2.5,0,0,0],[3,0,0,5,150,[1,-1,-1],[0,1,-1],0,0,0,1.4],[16,0,0,6,9,[1,.25,-1,.25],[0,-.75,0,.75],0,0,0,.6,3.5],[18,0,0,7,8,[1,.25,-1,.25],[0,.75,0,-.75],0,0,0,.8,2.5],[20,0,0,8,7,[1,.25,-1,.25],[0,.75,0,-.75],0,0,0,1.2,1.5],,[C/2,0,0,10,9,[[-1,0,0],[0,0,1],[-1,1,0]],[[-1.5,-.5,.5],[-.5,.5,-1.5],[-1.5,-1.5,-.5]],100,0,7],[C/2,0,0,11,10,[[-1,0,0,-1],[1,0,0,1],[-1,0,1,0],[-1,0,1,0],[-1,0,0,-1],[1,0,0,1]],[[-1.25,-.5,.8,.25],[-1.25,-.5,.8,.25],[-1.25,-.5,-1.25,-1.8],[.25,-.5,.25,.8],[.25,-.5,-1.8,-1.25],[.25,-.5,-1.8,-1.25]],100,0,6],[.8*C,0,0,12,15,[[-.5,0,.5,0],[-.5,0,0],[.5,0,0],[-.5,0,0],[.5,0,0]],[[-.75,-1,-.75,-.5],[-.75,-.5,.25],[-.75,-.5,.25],[-.75,-1.75,-.5],[-.75,-1.75,-.5]],.9,0,4,.004],[1.2*C,0,0,13,50,[[0,-.75,0],[0,.75,0],[-.75,.75,0],[-.75,.75,0],[-.35,.35,0]],[[-1,.5,0],[-1,.5,0],[.5,.5,0],[-.5,-.5,1],[.25,.25,-.5]],.9,0,13,.1],[2.5*C,0,0,14,200,[],[],.9,0,60,.003,1,0,[6,7,6,7,8]]],R1={10:2800,11:2600,12:60,13:200},D1=0;function M1(e,t){t=A1([e[0]+10*Math.cos(Math.PI*t/3),e[1]+10*Math.sin(Math.PI*t/3),4]);t[13]=e,t[9]=O(t,e),t[3]=t[9]+e[11],t[15]=0,t[16]=0,B.push(t)}function A1(e){var t=e.slice(0,2).concat(k1[e[2]].slice(0));if(12==t[5]||14==t[5])for(var r=0;r<6;r++)M1(t,r);return t}for(var f=[],_1=0;_1<6;_1++){var C1=(_1-3)*Math.PI/3+Math.PI/6,I1=Math.cos(C1),C1=Math.sin(C1);f.push(I1,C1)}for(var q1,U1,S1={},_1=0;_1<1e4;_1++)S1[(_1/1e4).toFixed(4)]=(U1=void 0,.99<(q1=_1/1e4)||(U1=1/q1)/2<100*q1%U1?1:0);function B1(e){var t=(R1[e[5]]-e[9])/R1[e[5]],r=0<e[4]?-55:~~(200*t)*S1[t.toFixed(4)];E(16);for(var a,o,i,n,s=0;s<e[7].length;s++)a=e[7][s],o=e[8][s],i=e[2],n=[80+e[4],55+r,130+~~(r/2),0<e[4]?.9:.2],b.beginPath(),E(-1,1,"rgba("+n+")"),Y1(a,o,i),b.closePath(),b.fill(),b.stroke()}function G1(e){if(!(e[0]+S[0]<20||e[0]+S[0]>w-20||e[1]+S[1]<20||e[1]+S[1]>T-20)){var t=e[0]+S[0]+P[0]+p1()*e[4]/40,r=9<e[5]?5*Math.sin(g0/50%(2*Math.PI))+5:0,r=e[1]+S[1]+P[1]+p1()*e[4]/40-r;if(b.translate(t,r),b.beginPath(),e[5]<10)E(e[5]+24),E(-1,2,2),a=e,b.rotate(a[9]),Y1(a[7],a[8],a[2]),b.rotate(-a[9]);else if(14==e[5]){var a=e,o="hsla("+20*a[3]+",50%,60%, 0.5)",i=(E(-1,2,2),b.beginPath(),E(-1,0,0<a[4]?D0[3]:o),a[2]/3.5);b.arc(0,0,i/2,0,2*Math.PI,!1),b.stroke(),b.beginPath(),b.bezierCurveTo(-i,0,0,-i,i,0),b.bezierCurveTo(i,0,0,i,-i,0),b.stroke(),b.rotate(a[3]);for(var n=0;n<6;n++){var s=f[2*n],c=f[2*n+1];Math.PI;b.beginPath(),b.arc(4*s*i,4*c*i,i,0,2*Math.PI,!1),b.stroke(),b.beginPath(),b.arc(2*s*i,2*c*i,i,0,2*Math.PI,!1),b.stroke(),b.beginPath(),b.moveTo(s*i*4,c*i*4),b.lineTo(4*i*f[(2*n+2)%12],4*i*f[(2*n+3)%12]),b.lineTo(4*i*f[(2*n+6)%12],4*i*f[(2*n+7)%12]),b.moveTo(s*i*2,c*i*2),b.lineTo(2*i*f[(2*n+2)%12],2*i*f[(2*n+3)%12]),b.lineTo(2*i*f[(2*n+6)%12],2*i*f[(2*n+7)%12]),b.stroke()}b.beginPath(),b.rotate(-a[3])}else E(-1,2,2),B1(e);b.closePath(),b.stroke(),b.translate(-t,-r)}}var N1={10:function(e){for(var t,r,a=0;a<9;a++)4!=a&&P1(t=e[0]+(a%3-1)*C,r=e[1]+(~~(a/3)-1)*C,.65,[t,r,1==a?1:0]);e[9]=R1[10]},11:function(e){for(var t,r,a=0;a<12;a++)4!=a&&P1(t=e[0]+(a%3-1)*C,r=e[1]+(~~(a/3)-1)*C,.65,[t,r,1==a?3:2]);e[9]=R1[11]},12:function(e){for(var t=0;t<2;t++){var r=A1([e[0],e[1],5]);r[9]=e[3]+t*Math.PI,B.push(r)}e[9]=R1[12]},13:function(e){for(var t=0;t<6;t++){var r=A1([e[0],e[1],5]);r[9]=e[3]+(t-3)*Math.PI/3,r[12]+=.5,B.push(r)}e[9]=45},14:function(e){for(var t,r=0;r<6;r++)(t=A1([e[0],e[1],5]))[9]=e[3]+(r-3)*Math.PI/3+Math.PI/6,t[12]-=.6,B.push(t);if(e[13]%16==0&&((t=A1([e[0],e[1],e[15][e[14]%e[15].length]]))[9]=e[3]/2,B.push(t),e[14]++),e[13]%100==0)for(var a=0;a<6;a++)M1(e,a);e[9]=70,e[13]++}};function L1(e,r){if(e[6]<=0){if(B.splice(r,1),5!=e[5])if(14==e[5]&&(m1=!0),H1(e[0],e[1],e[2],k1[e[5]][0],2*k1[e[5]][0],e[5]+24),9<e[5]){for(var a=e[0],o=e[1],i=e[10],n=~~(a/C),s=~~(o/C),c=Math.ceil(i/C),f=s-c;f<s+c;f++)if(void 0!==U[f])for(var u=n-c;u<n+c;u++)(1==U[f][u]||W((f+.5)*C-o,(u+.5)*C-a)<=i)&&(U[f][u]=0);D1=4,x(J0)}else x(K0)}else{if(0<e[4]&&(e[4]-=50),e[5]<10){0<e[10]*(e[9]-e[3])&&(2==e[5]?e[3]=O(e,W0||[0,0]):4==e[5]?e[3]+=e[9]+e[11]:e[3]=O(e,G),e[10]=e[9]<e[3]?e[11]:-e[11]);var h=h0(e);if(4==e[5]?e[9]+=e[10]*t:3!=e[5]||h&&3==h[5]?e[9]+=(h?-1:1)*e[10]:e[9]+=e[10],5==e[5]&&(e[6]-=t/10),5<e[5]&&e[5]<10)if(e[13]-=dt,e[13]<0)return P1((h=[(.5+~~(e[0]/C))*C,(.5+~~(e[1]/C))*C,e[5]+4])[0],h[1],1,h),void B.splice(r,1);4!=e[5]?(e[0]+=Math.cos(e[9])*t*e[12],e[1]+=Math.sin(e[9])*t*e[12]):(e[13][6]<1&&(e[10]*=.99),e[15]=2*C*(1.2-Math.cos(e[16])),e[16]+=t/200,e[0]=e[13][0]+Math.cos(e[9])*e[15],e[1]=e[13][1]+Math.sin(e[9])*e[15])}else{e[9]-=t,12<=e[5]&&(e[3]+=e[12]*t),e[9]<0&&!I&&N1[e[5]](e),e[10]+=dt*e[11];for(var l=e[0],v=e[1],g=e[10],m=~~(l/C),b=~~(v/C),d=Math.ceil(g/C),p=b-d;p<b+d;p++)if(void 0!==U[p])for(var y=m-d;y<m+d;y++)1==U[p][y]||W((p+.5)*C-v,(y+.5)*C-l)>=g||(U[p][y]=1)}r=u0(h=e),c0[r]=c0[r]||[],c0[r].push(h)}}var X1,O1=!1;function W1(){0<G[11]||(G[10]--,x(Q0),G[10]<=0?(H1(G[0],G[1],G[2],10,80,6),B0=[[],[]],I=!0,k.stop(),R.stop(),D.stop(),M.stop(),x1[0][3]=!0,t=30*dt,(z0=N>record)&&(record=N,v0.setItem("agar3sjs13k-record",N),x1[1][3]=!0,x1[2][3]=!0),g0=0):(G[11]=4,H1(G[0],G[1],G[2],5,40,6)))}function j1(e){var r,a;I||(t=(r=e)*G[4]*(0<G[8]?S0:1),a=r*G[4]*(0<G[8]?1.4:1),U[Math.round(G[1]/C)]&&1==U[Math.round(G[1]/C)][Math.round(G[0]/C)]&&(a-=.5),_0&C0[65]&&(G[0]-=a,G[0]<G[2]&&(G[0]=G[2]),G[0]>S[2]&&G[0]<q-S[2]&&(S[0]+=a),32<S[0])&&(S[0]=32),_0&C0[87]&&(G[1]-=a,G[1]<G[2]&&(G[1]=G[2]),G[1]>S[3]&&G[1]<q-S[3]&&(S[1]+=a),27<S[1])&&(S[1]=27),_0&C0[83]&&(G[1]+=a,G[1]>q-G[2]&&(G[1]=q-G[2]),G[1]>S[3]&&G[1]<q-S[3]&&(S[1]-=a),S[1]<-272)&&(S[1]=-272),_0&C0[68]&&(G[0]+=a,G[0]>q-G[2]&&(G[0]=q-G[2]),G[0]>S[2]&&G[0]<q-S[2]&&(S[0]-=a),S[0]<-67)&&(S[0]=-67),G[3]=O([G[0]+S[0],G[1]+S[1]],A),G[5]+=25*t*(8*A[2]+1),G[5]%=360,(a=h0(G))&&W1(),A[2]&&G[6]<=0&&G[8]<=0?(G0.push([G[0]+z1(1,2+G[7]/30),G[1]+z1(1,2+G[7]/30),2,G[3]+z1(1,.05+.001*G[7])]),x(H0[~~o0(H0.length)]),G[6]=1/G[7]):G[6]-=r,A[3]&&G[8]<=0&&G[9]<=0?(x($0),G[8]=.55,G[9]=1.2):(G[8]-=r,G[9]-=r),0<G[11]&&(G[11]-=e));for(var o=G0.length-1;0<=o;o--){var i=G0[o],n=(i[0]+=Math.cos(i[3])*t*i[2],i[1]+=Math.sin(i[3])*t*i[2],(i[0]<-20||i[0]>q+20||i[1]<-20||i[1]>q+20)&&G0.splice(o,1),h0(i));n&&(0<--n[6]&&H1(i[0],i[1],-i[3],2,10,9),G0.splice(o,1),n[4]=200,9<n[5])&&x(Z0[~~o0(Z0.length)])}for(o=0;o<N0.length;o++){var s=N0[o];s[0]+=Math.cos(s[2])*o0(3,2),s[1]+=Math.sin(s[2])*o0(3,2),--s[3]<0&&N0.splice(o,1)}0<D1&&(D1-=.1),c0={};for(o=B.length-1;0<=o;o--)L1(B[o],o);if(0<j0.length&&N>j0[0]){var c=O0[j0.splice(0,1)[0]];switch(c.splice(0,1)[0]){case 0:c[0]=(c[0]+.5)*C,c[1]=(c[1]+.5)*C,P1(c[0],c[1],1,c);break;case 1:c[0].play();break;case 2:F=c;break;case 3:x(c[0]);break;case 4:c[0].tempo=c[1],138==c[1]&&(c[0].stop(),c[0].play());break;case 5:L0=c[0];break;case 6:g1(c[0]);break;case 7:c[0].stop();break;case 8:wave=c[0]}}else 0==j0.length&&(E1++>=F1.length&&(E1=0),O0[N+5e3]=[0,~~o0(21),~~o0(21),F1[E1]],j0.push(N+5e3));for(var f=0;f<w1.length;f++){var u=w1[f];u[2]-=dt,u[2]<0&&(B.push(A1(u[4])),9<u[4][2]&&(h=10,x(V0)),3==u[4][2]&&(W0=B[B.length-1]),w1.splice(f,1))}}function z1(e,t){return e?o0(2*t,-t):0}function Y1(e,t,r){b.moveTo(e[0]*r,t[0]*r);for(var a=1;a<e.length;a++)b.lineTo(e[a]*r,t[a]*r);b.lineTo(e[0]*r,t[0]*r)}function H1(e,t,r,a,o,i){for(var n=-a;n<a;n++)N0.push([e,t,o0(X0*n,r),o||60,i])}function V1(e){var t,r,a,o,i,n,s;E(7,1),b.fillRect(0,0,p,y),o=r=185,n=i=a=t=0,E(-(s=1),1,"rgba("+~~o0(180,t)+","+~~o0(r,a)+","+~~o0(o,i)+","+o0(n,s)+")");for(var c=0;c<6;c++)b.fillRect(~~o0(800),~~o0(600),2,2);b.save();b.beginPath(),P=I?[0,0]:[z1(A[2]||0<D1,D1+2),z1(A[2]||0<D1,D1+2)],E(-1,1,"rgba(7,8,12,"+(.2-(0<G[8]?.1:0))+")"),b.translate(S[0]+P[0],S[1]+P[1]),b.fillRect(0,0,q,q),E(1),b.beginPath();for(c=0;c<=_;c++)f1(c*C-.5,0,q);b.stroke(),b.beginPath(),E(5);for(c=0;c<=_;c++)f1(c*C+.5,0,q);b.stroke(),b.restore(),b.save(),b.beginPath(),E(8,1),E(2);for(var f=0;f<_;f++)for(c=0;c<_;c++)0!=U[f][c]&&(b.fillRect(c*C+S[0]+P[0],f*C+S[1]+P[1],C,C),b.strokeRect(c*C+S[0]+P[0]-.5,f*C+S[1]+P[1]-.5,C+2,C+2));b.stroke(),b.beginPath(),E(2);for(f=0;f<_;f++)for(c=0;c<_;c++)0!=U[f][c]&&b.strokeRect(c*C+S[0]+P[0]+.5,f*C+S[1]+P[1]+.5,C,C);b.fill(),b.closePath(),b.restore(),b.save(),T1(),b.restore(),b.save(),b.translate(G[0]+S[0],G[1]+S[1]),b.rotate(G[3]+Math.PI/2),0<G[11]&&0<Math.sin(10*e)&&(b.globalAlpha=.5),E(-1,2,2),E(6),b.beginPath(),Y1(B0[0],B0[1],G[2]),b.closePath(),b.stroke(),b.restore(),b.save();for(c=0;c<B.length;c++)G1(B[c]);b.closePath(),b.restore(),b.save(),E(9,1);for(c=0;c<G0.length;c++){var u=G0[c];u[0]+S[0]<20||u[0]+S[0]>w-20||u[1]+S[1]<20||u[1]+S[1]>T-20||(b.beginPath(),b.arc(u[0]+S[0],u[1]+S[1],u[2],0,2*Math.PI,!1),b.closePath(),b.fill())}b.restore(),b.save();for(c=0;c<N0.length;c++){var h=N0[c];h[0]+S[0]<5||h[0]+S[0]>w-5||h[1]+S[1]<5||h[1]+S[1]>T-5||(b.beginPath(),E(h[4],1),b.arc(h[0]+S[0]+P[0],h[1]+S[1]+P[1],2,0,2*Math.PI,!1),b.closePath(),b.fill())}b.restore(),b.save(),m(L0,401,501,14,[26,21,21]),I?(E(22,1),b.fillRect(0,0,q,q),m0&&m("evil mode",400,10,12,[0,16]),z0?m("-new record-",400,260,22,[10,18]):m("game over",400,240,20,[0,13]),m(N.toFixed(0),400,200,z0?20:16,[0,9])):(m(6<wave?"evil":wave+"/6",400,60,9,[0,3]),m(N.toFixed(0),750,60,18,[32,9],1),m(N>record?"record":record.toFixed(0),750,110,9,[24,3],1)),b.save();for(var l=0;l<G[10];l++)b.beginPath(),b.fillStyle="#FF0000",b.translate(50+40*l,50),b.moveTo(0,0),b.bezierCurveTo(-10,-8,-15,0,0,10),b.bezierCurveTo(15,0,10,-8,0,0),b.fill(),b.translate(-(50+40*l),-50);b.restore(),b.restore()}requestAnimationFrame(function e(t){if(X1=X1||t,dt=Math.min(100,t-X1)/1e3,X1=t,g0++,!O1){if(o1)dt,L<++i1&&(i1=0);else if(m1){switch(d1){case 90:g1("what",30);break;case 120:g1("have",30);break;case 150:g1("you",30);break;case 180:g1("done?",120);break;case 185:F=[100,100,100,0,0,0,0];break;case 215:F=[100,100,100,100,100,100,100],k.stop(),R.stop(),R.tempo=1,R.play(),D.stop(),D.tempo=1,D.play(),M.stop();break;case 320:R.stop(),D.stop(),R.tempo=138,D.tempo=138,l1="";break;case 434:D1=0}435<d1&&d1<1694&&(l1=b1[~~((d1-435)/180)]),1694<d1&&(N=3e5,wave=7,B=[],m0=!(m1=!(G0=[])),v0.setItem("agar3sjs13k-gm","qyui"),a1()),d1++}else F[6]<0&&j1(dt);if(o1||I)switch(g0){case 240:case 280:case 500:y1(),x(e1);break;case 700:g0=0}for(var r=0;r<x1.length;r++){var a=x1[r];!a[3]||A[0]<a[0]||A[0]>a[0]+a[2]||A[1]<a[1]||A[1]>a[1]+42?a[6]=a[7]=!1:(a[7]=!0,1==A[2]?a[6]=!0:0==A[2]&&a[6]&&(a[6]=!1,a[8]()))}I||o1||(N+=1e3*dt*(0<G[8]?S0:1))}if(b.save(),o1){b.save(),b.beginPath(),E(23,1),b.fillRect(0,0,p,y),E(0);var o=y/2,i=2*L;b.beginPath();for(var n=0;n<o/L;n++){var s=n0(n*L+i1,o+i,o,o);E(1),c1(0,s+.5,p)}for(b.stroke(),b.beginPath(),n=0;n<o/L;n++)s=n0(n*L+i1,o+i,o,o),E(2),c1(0,y-s-.5,p);b.stroke();var c=o-i;for(E(2),b.beginPath(),c1(0,c,p),c1(p/2,c,-c,!0),b.stroke(),E(1),b.beginPath(),c1(0,y-c,p),c1(p/2,y-c,c,!0),b.stroke(),b.beginPath(),n=1;n<p/(2*L);n++){var f=n*n*5+25;E(2),s1(n*L+p/2,c,-c,!0,f),s1(-n*L+p/2,c,-c,!0,-f)}for(b.stroke(),b.beginPath(),n=1;n<p/(2*L);n++)f=n*n*5+25,E(1),s1(n*L+p/2,y-c,c,!0,f),s1(-n*L+p/2,y-c,c,!0,-f);b.stroke(),n1?(m("controls",400,130,12,[0,16]),m("move             awsd",400,251,12,[0,0]),m("fire       left click",400,290,12,[0,0]),m("warptime  right click",400,330,12,[0,0])):(m("destroy the glitch invasion",401,50,9,[0,0]),m("evil glitch",400,270-50*X,30*(1+X),[0,9,0,9])),m("bario entertainment system",401,520,9,[0,10]),b.closePath(),b.fill(),b.stroke(),b.restore()}else h1||V1(dt);h1||m1||(b.save(),b.beginPath(),E(-1,2,2),b.translate(A[0],A[1]),E(6),b.translate(-10,-10),f1(10,0,20),b.stroke(),b.closePath(),b.restore()),b.save();for(var u=0;u<x1.length;u++){var h,l=x1[u];l[3]&&(E(h=l[7]?14:l[4]),E(-1,2,2),b.strokeRect(l[0],l[1],l[2],42),m(l[5],l[0]+l[2]/2,l[1]+9,12,[0,h]))}b.restore(),h1?(b.save(),b.beginPath(),E(2,1),b.fillRect(0,0,p,y),m(l1,430,180,l1.length<5?120:70,[20,20,20,20,20,20,20,20,20,20,20,20]),b.closePath(),b.fill(),b.restore()):!m1||d1<300||(b.save(),b.beginPath(),d1<436?(E(-1,1,"rgba(0,0,0,"+(1-(436-d1)/120)+")"),b.fillRect(0,0,p,y)):(E(23,1),b.fillRect(0,0,p,y),m(l1,400,250,16,[0,0,0,0])),b.closePath(),b.fill(),b.restore()),!O1||o1||I||(E(22,1),b.fillRect(0,0,p,y),m("paused",400,240,20,[0,13])),0<X&&.51==(X+=.05)&&x(Y0),1<X&&(o1=!1,X=0,r1()),0<X&&X<1&&(E(-1,1,"rgba(220,220,220,"+X+")"),b.fillRect(0,0,p,y)),(h1=0<v1)&&--v1,b.restore(),A0(),requestAnimationFrame(e)})})();