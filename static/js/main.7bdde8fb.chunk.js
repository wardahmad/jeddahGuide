(this.webpackJsonpjeddah_guide=this.webpackJsonpjeddah_guide||[]).push([[0],{22:function(e,t,a){},35:function(e,t,a){e.exports=a(51)},40:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(28),s=a.n(i),c=(a(40),a(5)),r=a(6),l=a(8),p=a(7),m=a(9),h=a(59),d=(a(22),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"copyright 2020 | SoftwareKnights Team"))}}]),t}(n.Component)),g=a(17),u=a(16),w=a(18),f=a(58),b=a(53),j=a(54),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.currentItem.imgSrc.map((function(e,t){return o.a.createElement(f.a.Item,{key:t},o.a.createElement("img",{className:"img-responsive center-block",width:500,height:400,src:e}))}));return o.a.createElement(b.a,null,o.a.createElement(j.a,null,o.a.createElement(f.a,null,e)))}}]),t}(n.Component),y=a(31),A=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.props.location),o.a.createElement("div",{className:"mapDiv"},o.a.createElement(y.ReactBingmaps,{bingmapKey:"AliiTsAbE3AMLr6dHgirwvlJCVXRD4-4Cvaz-SPST4JW_NW69UhDyrqOPz01mIGM",center:[this.props.location[0],this.props.location[1]],zoom:15,pushPins:[{location:[this.props.location[0],this.props.location[1]],option:{color:"black"}}]}))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"displayContainer"},o.a.createElement("div",null,o.a.createElement("div",{className:"contChild"},o.a.createElement("div",null,o.a.createElement("h3",{className:"displayH3"},this.props.displayItem.name),o.a.createElement(E,{currentItem:this.props.displayItem}),console.log(this.props.restaurant))),o.a.createElement("div",null," ",o.a.createElement("p",{className:"displayPar"},this.props.displayItem.description)),o.a.createElement("div",{className:"contChild"},o.a.createElement(A,{location:this.props.displayItem.location}),console.log(this.props.displayItem.location))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={onDisplay:" "},a.setDisplayItem=a.setDisplayItem.bind(Object(w.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"setDisplayItem",value:function(e){this.setState({onDisplay:o.a.createElement(v,{displayItem:e})})}},{key:"render",value:function(){var e=this,t=this.props.list.map((function(t,a){return o.a.createElement("div",{key:a,className:"Card"},o.a.createElement(h.a,{style:{width:"15rem",margin:"2px",marginBottom:"30px"},className:"cardHov"},o.a.createElement(h.a.Img,{onClick:function(){return e.setDisplayItem(t)},variant:"top",src:t.imgSrc[0],width:"250",height:"250"}),o.a.createElement(h.a.Body,null,o.a.createElement("button",{id:"linkButton",onClick:function(){return e.setDisplayItem(t)}}," ",t.name," "))))}));return o.a.createElement("div",null,o.a.createElement("div",{className:"CardCont"},t),this.state.onDisplay)}}]),t}(n.Component),N=[{listName:"bestHotels",list:[{name:"Assila",description:"Offers a rooftop outdoor pool and spa center",imgSrc:["https://www.citylist.pk/wp-content/uploads/2017/07/Rocco-Forte-Assila-Hotel.jpg","https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/7/0/121/249/770/jedla-king-guestroom-4229-hor-clsc_O.jpg","https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/7/0/120/902/174/jedla-outdoor-swimming-pool-4237-hor-clsc_O.jpg"],location:[21.5517952,39.1623333]},{name:"Rosewood",description:"Offers a view on the see and a rooftop outdoor pool",imgSrc:["https://www.savoirflair.com/wp-content/uploads/2017/10/jeddah-Rosewood-Hotel-exterior.jpg","https://static.hotel-pictures.info/uploads/hotel/74687/photo/rosewood-jeddah_154666644836.jpg","https://i0.wp.com/www.agoda.com/wp-content/uploads/2019/05/Best-hotels-in-Jeddah-Rosewood-Jeddah.jpg"],location:[21.57771,39.1079033]},{name:"Park Hyatt",description:"Amazing Suites Blending European Architecture with Touches of Andalusian Design",imgSrc:["https://r-cf.bstatic.com/images/hotel/max1280x900/111/111790807.jpg","https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/03/03/1625/Park-Hyatt-Jeddah-P225-Bedroom.jpg/Park-Hyatt-Jeddah-P225-Bedroom.16x9.jpg?imwidth=1280","https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/03/03/1625/Park-Hyatt-Jeddah-P208-Exterior-Fountains.jpg/Park-Hyatt-Jeddah-P208-Exterior-Fountains.16x9.jpg"],location:[21.512091,39.157349]},{name:"Hilton",description:"Offers a sea view and a luxurious experience",imgSrc:["http://haifcompany.com/FileUploads/Projects/Photos/Photos/326900497.jpg","https://pix10.agoda.net/hotelImages/2287352/34840274/46a1af9547ac61c647c24e95c1a77b3d.jpg","https://r-cf.bstatic.com/images/hotel/max1280x900/126/12675635.jpg"],location:[21.6046838,39.1069809]}]},{listName:"bestRestaurants",list:[{name:"Albaik",description:"Best fast food restaurant in Jeddah",imgSrc:["https://live.staticflickr.com/2949/15313593077_e9940bf6b2_b.jpg","https://lh3.googleusercontent.com/p/AF1QipPgZC21mCa6Vw5BWFm69AbpjrzplKQUwFvVNcsG=s0","https://lh3.googleusercontent.com/p/AF1QipP7U1565if3VRyuayFD3lt2Tvbu5sl6liki5Jv3=s0"],location:[21.595646,39.204517]},{name:"Lusin",description:"Best Armenian restaurant in Jeddah",imgSrc:["https://lh3.googleusercontent.com/p/AF1QipNUG2vWJcELu9bdrA7maoPH-wBt7FiqnbY30Q4_=s0","https://lh3.googleusercontent.com/p/AF1QipOv55lT1Z85DesMxVEuH8wlVpKQf-zSNyGm8wsV=s0","https://lh3.googleusercontent.com/p/AF1QipOw43vA_vbl15TADhL891LRU2k3F5ZYVtO2nh_n=s0"],location:[21.5479063,39.1421503]},{name:"Twina",description:"Best seefood restaurant in Jeddah",imgSrc:["https://lh3.googleusercontent.com/p/AF1QipMIUxLCKmEBZ4foxq62GWsrhN2S_ROtkMg5BlBV=s0","https://lh3.googleusercontent.com/p/AF1QipNrskIvOZ0XWE3JtgeyytkGBtwRLNYmyI4y9oE4=s0","https://lh3.googleusercontent.com/p/AF1QipOyIY6eJwPzIWkrsV6Z5mhvC7pgv8wuoahpQPI5=s0"],location:[21.574903,39.142742]},{name:"Nozomi",description:"Best Japanese restaurant in Jeddah",imgSrc:["https://lh3.googleusercontent.com/p/AF1QipOaB0xIFL1czdu1ldteXCYa--HJd4pvJN9JhM_a=s0","https://lh3.googleusercontent.com/p/AF1QipObiI83IHckM8_HBLsLAeRH_jRgQno0TdzMaFnI=s0","https://lh3.googleusercontent.com/p/AF1QipNF86U0V-Bh9PV6QS1diIJJuufENkSvwkSZHBLM=s0"],location:[21.5505294,39.1511087]}]},{listName:"bestCafes",list:[{name:"Medd Cafe",description:"First specialty coffee in Jeddah",imgSrc:["https://lh3.googleusercontent.com/p/AF1QipMofM9YcsgW_XEo4Y_9VEbSiTw7gSt8AzuiBYCP=s0","https://lh3.googleusercontent.com/p/AF1QipPMrgRrbYdx0bq82zJem_C2X4BOk__U408W1cFr=s0","https://lh3.googleusercontent.com/p/AF1QipOrOOjNyxYK1CTy_xiAt91npdPn15WOIQR7GmO6=s0"],location:[21.644886,39.10334]},{name:"Toqa",description:"Offers different kinds of coffee and sweets",imgSrc:["https://lh3.googleusercontent.com/p/AF1QipNYNc4ncwBrhWTOIkhkmrZJINRgobbTwjjsdsh_=s0","https://lh3.googleusercontent.com/p/AF1QipMRwmg09jtKwRMR5Tn09PVurpc99sVkgv302_Hw=s0","https://lh3.googleusercontent.com/p/AF1QipO7hEdGPItweSHMc_k7Fj8jEUJhxeTwQWJGTF4=s0"],location:[21.575141,39.1405393]},{name:"Brew 92",description:"Offers coffee in different way",imgSrc:["https://pbs.twimg.com/media/DvU97BuWwAADZEv.jpg","https://www.liquidesign.co.uk/wp-content/uploads/2018/06/850_6957-HDR.jpg","https://lh3.googleusercontent.com/p/AF1QipMSy-cvuV8AaYFQZcIAErs21Xqars4x9qydCN5A=s0"],location:[21.5751401,39.1252184]},{name:"La Luna",description:"Best experience of coffee and ice cream",imgSrc:["https://jeddahnight.com/wp-content/uploads/2019/03/Laluna-Cafe-13-870x560.jpg","https://lh3.googleusercontent.com/p/AF1QipPXD48cDsAGP9PNi06xwFaMemNdNGjRfj_XHdjQ=s0","https://lh3.googleusercontent.com/p/AF1QipOpVWrAfHJmm8M-dh1w37TbkZgDiXKRgZaA8kR5=s0"],location:[21.562786,39.1604]}]},{listName:"bestPlaces",list:[{name:"Jeddah Water Front",description:"Best view of the see with a sidewalk 5km long. The waterfrony has seven areas with different kinds of activities.",imgSrc:["https://www.jeddah.gov.sa/Projects/JW/img/slider/slide1.jpg","https://www.arabnews.com/sites/default/files/2017/11/16/1034971-1524699631.jpg","https://lh3.googleusercontent.com/p/AF1QipMcJBKhpC_MnfIqZbvQnODQa1pwg4WDGMi-HyFt=s0"],location:[21.617348,39.107185]},{name:"Jeddah Historical Area",description:"Experience the old city of Jeddah and live the experience of walking through the old streets and shops and watch buildings over 100 years old.",imgSrc:["https://lh3.googleusercontent.com/p/AF1QipPTqYId9sKkVpYk7jMv8uVWtZ2BMAiYvk3uNTlb=s0","https://lh3.googleusercontent.com/p/AF1QipNuzCwDFlSKxdxFj-WVvr0H2p4xIR4gd3QUsg52=s0","https://lh3.googleusercontent.com/p/AF1QipOpj2QjRClg2f9Qq-OQFybTCwjvBNPuQ7xpq6ew=s0"],location:[21.484949,39.18623]},{name:"Obhur",description:"Experience the water activities from riding boats to renting private resorts by the sea.",imgSrc:["https://lh3.googleusercontent.com/p/AF1QipPV_9ZqBazILUS05V-RQIIwzIJvwf6hAQIojEaN=s0","https://lh3.googleusercontent.com/p/AF1QipO2ZC_aASm4NkyLEQXAza1ttttnAHhIhnj4nk0G=s0","https://lh3.googleusercontent.com/p/AF1QipMefn1TcDEolmiwWaLj10NWhMCizMe3KJjGwto=s0"],location:[21.7562224,39.0547057]},{name:"Fakieh Aquarium",description:"More than 200 species including Sharks, Groupies, String Rays, Napoleon Wrasse, Sea Horses, Murrays amongst other. Also enjoy the amazing Dolphin and Seal Lion show everyday.",imgSrc:["https://i2.wp.com/blog.gurfati.com/wp-content/uploads/2017/03/AAEAAQAAAAAAAAzIAAAAJDgwYjU4NGI5LTUyNjktNGI3MS05NmIwLTdhYTNjYTNkNDg2ZQ.jpg?fit=1369%2C798","https://i0.wp.com/www.agoda.com/wp-content/uploads/2019/05/Things-to-do-in-Jeddah-Saudi-Arabia-Fakieh-Aquarium.jpg","http://www.fakiehaquarium.com/blueocean/images/top-slider/home-slide-img3.jpg"],location:[21.572229,39.109619]}]},{listName:"Activities",list:[{name:"Alshallal Amusement Park",description:"Enjoy the roller coasters and all the different rides. Also enjoy the planetarium experience and the comedy club",imgSrc:["https://lh3.googleusercontent.com/p/AF1QipPi9gXuQG_UlrD57E2kobHU6o5wKnzwVxbubrKT=s0","https://lh3.googleusercontent.com/p/AF1QipPawhr9gm2bahwN0tOLl3rC2zmgRcNO4y_jn36m=s0","https://i0.wp.com/www.agoda.com/wp-content/uploads/2019/05/Things-to-do-in-Jeddah-Saudi-Arabia-Al-Shallal-Theme-Park.jpg"],location:[21.567957,39.1088733]},{name:"Desert Trip",description:"Enjoy the peaceful feeling of the desert with the traditional tea. Also enjoy camping and the sandy sports like drifting on the sand.",imgSrc:["https://pbs.twimg.com/media/CwKWiSNXYAEtjbr.jpg","https://lh3.googleusercontent.com/p/AF1QipM5ykSeX_wg2fJrIVa6YobR0nB-3_HizxfHNboP=s0","https://lh3.googleusercontent.com/p/AF1QipM6EMPx_x9hkZtDCglHbcQGjeXMeM2tr-T2iFSY=s0"],location:[21.2793812,39.3498382]},{name:"Scuba Diving",description:"Enjoy the magical experience of the red sea and experience the scuba diving and exploring the sea.",imgSrc:["https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/05/Things-to-do-in-Jeddah-Saudi-Arabia-SCUBA-PADI-diving-Obhur-Beach.jpg","https://www.abouther.com/sites/default/files/2018/09/03/main23453443.jpg","https://serviis.files.wordpress.com/2018/02/shutterstock_1014053944.jpg?w=1000&h=563&crop=1"],location:[21.758762,39.0211541]},{name:"Bicycling",description:"At the Jeddah Waterfront, enjoy riding the bicycles while enjoying the sea view.",imgSrc:["https://content2.seesaudi.sa/Images/2016/09/14/WaterMark/166496.jpg","https://rideukbmx.com/wp-content/uploads/2018/03/fise-jeddah-action-sports-festival-2018-drummond-16x9_1.jpg","https://cdn.platinumlist.net/upload/event/bicycle_parade_1970_jan_01_jeddah_waterfront_75845-full1561563900.jpg"],location:[21.604499,39.109767]}]}],O=a(55),F=a(56),I=a(57),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).toggle=a.toggle.bind(Object(w.a)(a)),a.state={isOpen:!1,wether:"",icon:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://api.openweathermap.org/data/2.5/weather?q=Jeddah&APPID=cbc315d131ff02c7286354ef49784966&units=metric").then((function(e){return e.json()})).then((function(t){var a="http://openweathermap.org/img/wn/".concat(t.weather[0].icon+".png");e.setState({wether:t.main.temp,icon:a})})).catch(console.log)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O.a,{color:"faded",dark:!0,expand:"md",fixed:"top",className:"navDark"},o.a.createElement(F.a,{className:"AppIc"},o.a.createElement(I.a,null," ",o.a.createElement("img",{src:"https://imagizer.imageshack.com/img923/6507/eWmyYS.png",width:"50",height:"50"})," ",o.a.createElement("span",{className:"NavJed"}," Jeddah Guide"))),o.a.createElement("div",{className:"HomeIcon"},o.a.createElement(I.a,{href:"/"},this.state.wether,"\xb0",o.a.createElement("img",{src:this.state.icon})," ",o.a.createElement("img",{src:"https://i.postimg.cc/13rtY39H/home.png",width:"35",height:"35"})))))}}]),t}(o.a.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=N.filter((function(e){return"bestRestaurants"===e.listName}))[0].list,t=N.filter((function(e){return"bestCafes"===e.listName}))[0].list,a=N.filter((function(e){return"bestPlaces"===e.listName}))[0].list,n=N.filter((function(e){return"bestHotels"===e.listName}))[0].list,i=N.filter((function(e){return"Activities"===e.listName}))[0].list,s="/jeddah-guide-React-App";return o.a.createElement(g.a,null,o.a.createElement(Q,null),o.a.createElement("div",{className:"CardCont"},o.a.createElement("div",{className:"Card1"},o.a.createElement(h.a,{style:{width:"15rem",margin:"1px"},className:"cardHov"},o.a.createElement(h.a.Img,{variant:"top",src:"https://i.postimg.cc/zGfYvvSV/image.png",width:"250",height:"250"}),o.a.createElement(h.a.Body,null,o.a.createElement(g.b,{to:s+"/restaurants"},o.a.createElement(h.a.Title,{class:"appFont"},"Restaurants ",o.a.createElement("img",{src:"https://i.postimg.cc/mD1NKHqH/cutlery.png",width:"40",height:"40"})))))),o.a.createElement("div",{className:"Card2"},o.a.createElement(h.a,{style:{width:"15rem",margin:"1px"},className:"cardHov"},o.a.createElement(h.a.Img,{variant:"top",src:"https://r1.ilikewallpaper.net/pic/201702/papers_co_nn75_coffe_barista_art_bokeh_6_wallpaper_640.jpg",width:"250",height:"250"}),o.a.createElement(h.a.Body,null,o.a.createElement(g.b,{to:s+"/cafes"},o.a.createElement(h.a.Title,{class:"appFont"},"Cafe's",o.a.createElement("img",{src:"https://i.postimg.cc/GtdwXGhc/food-and-restaurant.png",width:"40",height:"40"})))))),o.a.createElement("div",{className:"Card3"},o.a.createElement(h.a,{style:{width:"15rem",margin:"1px"},className:"cardHov"},o.a.createElement(h.a.Img,{variant:"top",src:"https://3.bp.blogspot.com/-1kbp75rwvsY/WkYWiJE73HI/AAAAAAAAA0I/wKCBFDbXd0M3X4PUI4joJty8WA2S_EUZgCPcBGAYYCw/s1600/IMG_4501.JPG",width:"250",height:"250"}),o.a.createElement(h.a.Body,null,o.a.createElement(g.b,{to:s+"/places"},o.a.createElement(h.a.Title,{class:"appFont"},"Places ",o.a.createElement("img",{src:"https://i.postimg.cc/FKVQ3YG0/place.png",width:"40",height:"40"})))))),o.a.createElement("div",{className:"Card4"},o.a.createElement(h.a,{style:{width:"15rem",margin:"1px"},className:"cardHov"},o.a.createElement(h.a.Img,{variant:"top",src:"https://live.staticflickr.com/65535/49356142872_e84b35fc65_n.jpg",width:"250",height:"250"}),o.a.createElement(h.a.Body,null,o.a.createElement(g.b,{to:s+"/hotels"},o.a.createElement(h.a.Title,{class:"appFont"},"Hotels ",o.a.createElement("img",{src:"https://i.postimg.cc/ry9y4FQ1/sleeping.png",width:"40",height:"40"})))))),o.a.createElement("div",{className:"Card5"},o.a.createElement(h.a,{style:{width:"15rem",margin:"1px"},className:"cardHov"},o.a.createElement(h.a.Img,{variant:"top",src:"https://lh3.googleusercontent.com/p/AF1QipPi9gXuQG_UlrD57E2kobHU6o5wKnzwVxbubrKT=s0",width:"250",height:"250"}),o.a.createElement(h.a.Body,null,o.a.createElement(g.b,{to:s+"/activities"},o.a.createElement(h.a.Title,{class:"appFont"},"Activities ",o.a.createElement("img",{src:"https://i.postimg.cc/NMJ70D1z/birthday-and-party.png",width:"40",height:"40"}))))))),o.a.createElement(u.a,{path:s+"/restaurants",component:function(){return o.a.createElement(k,{list:e})}}),o.a.createElement(u.a,{path:s+"/cafes",component:function(){return o.a.createElement(k,{list:t})}}),o.a.createElement(u.a,{path:s+"/places",component:function(){return o.a.createElement(k,{list:a})}}),o.a.createElement(u.a,{path:s+"/hotels",component:function(){return o.a.createElement(k,{list:n})}}),o.a.createElement(u.a,{path:s+"/activities",component:function(){return o.a.createElement(k,{list:i})}}),o.a.createElement(d,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);s.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.7bdde8fb.chunk.js.map