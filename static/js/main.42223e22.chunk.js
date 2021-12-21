(this["webpackJsonpglobal-earthquake-monitor"]=this["webpackJsonpglobal-earthquake-monitor"]||[]).push([[0],{162:function(e,t,r){},164:function(e,t,r){},383:function(e,t,r){"use strict";r.r(t);var c=r(0),s=r(61),a=r.n(s),i=(r(162),r(90)),n=r.n(i),o=r(155),l=r(63),d=(r(164),r(156)),j=r.n(d),h=(r(65),r(91)),m=r(39),u=r(16),b=r.n(u),p=r(1),x=Object(h.a)(Object(h.b)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDcxtC06rkmeB52VEzmXhTfdzV0_7SsYhI&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(p.jsx)("div",{style:{height:"100%"}}),containerElement:Object(p.jsx)("div",{style:{height:"400px"}}),mapElement:Object(p.jsx)("div",{style:{height:"100%"}})}),m.withScriptjs,m.withGoogleMap)((function(e){var t=e.earthquakeData,r=e.setSelected;return Object(p.jsx)(m.GoogleMap,{defaultZoom:2.5,defaultCenter:{lat:40.73061,lng:-73.935242},children:t.map((function(e,t){var c=b()().subtract(1,"hours"),s=b()(e.time).isAfter(c),a=b()().subtract(1,"days"),i=b()(e.time).isAfter(a),n=b()().subtract(7,"days"),o=b()(e.time).isAfter(n),l=s?"red":i?"yellow":o?"blue":"green";return Object(p.jsx)(m.Circle,{center:{lat:e.lat,lng:e.lng},radius:5e4*e.magnitude,options:{strokeColor:l,fillColor:l,fillOpacity:.4,strokeWeight:0},onClick:function(){return r(e)}},t)}))})})),g=function(e){var t=e.firstEarthquake,r=b()(t.time).format("dddd, MMMM Do YYYY, h:mm:ss a");return Object(p.jsxs)("div",{class:"column",children:[Object(p.jsx)("div",{class:"card level",style:{backgroundColor:"#38a3a5"},children:Object(p.jsx)("div",{class:"card-content level-item has-text-centered",id:"question",children:Object(p.jsx)("h1",{class:"title is-4",style:{color:"white"},children:"Most Recent Earthquake"})})}),Object(p.jsxs)("footer",{class:"card-footer",style:{backgroundColor:"#57cc99"},children:[Object(p.jsx)("div",{class:"card-footer-item",style:{marginTop:"50px",marginBottom:"50px"},children:Object(p.jsxs)("h3",{children:["Place - ",t.place]})}),Object(p.jsx)("div",{class:"card-footer-item",style:{marginTop:"50px",marginBottom:"50px"},children:Object(p.jsxs)("h3",{children:["Magnitude - ",t.magnitude]})}),Object(p.jsx)("div",{class:"card-footer-item",style:{marginTop:"50px",marginBottom:"50px"},children:Object(p.jsxs)("h3",{children:["Time - ",r]})}),Object(p.jsx)("div",{class:"card-footer-item",style:{marginTop:"50px",marginBottom:"50px"},children:Object(p.jsxs)("h3",{children:["Was it felt? ",t.felt?"Yes":"No"]})})]})]})},f=function(e){var t=e.earthquake,r=b()(t.time).format("dddd, MMMM Do YYYY, h:mm:ss a");return Object(p.jsxs)("div",{class:"column",children:[Object(p.jsx)("div",{class:"card level",children:Object(p.jsx)("div",{class:"card-content level-item has-text-centered",style:{backgroundColor:"#38a3a5"},children:Object(p.jsx)("h1",{class:"title is-4",style:{color:"white"},children:"Earthquake Details"})})}),Object(p.jsxs)("footer",{class:"card-footer",style:{backgroundColor:"#57cc99"},children:[Object(p.jsx)("div",{class:"card-footer-item",style:{marginTop:"50px",marginBottom:"50px"},children:Object(p.jsxs)("h3",{children:["Place - ",t.place]})}),Object(p.jsx)("div",{class:"card-footer-item",style:{marginTop:"50px",marginBottom:"50px"},children:Object(p.jsxs)("h3",{children:["Magnitude - ",t.magnitude]})}),Object(p.jsx)("div",{class:"card-footer-item",style:{marginTop:"50px",marginBottom:"50px"},children:Object(p.jsxs)("h3",{children:["Time - ",r]})}),Object(p.jsx)("div",{class:"card-footer-item",style:{marginTop:"50px",marginBottom:"50px"},children:Object(p.jsxs)("h3",{children:["Was it felt? ",t.felt?"Yes":"No"]})})]})]})},O=r(92),y=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),r=t[0],s=t[1],a=Object(c.useState)(!0),i=Object(l.a)(a,2),d=i[0],h=i[1],m=Object(c.useState)(null),u=Object(l.a)(m,2),b=u[0],y=u[1],v=function(){var e=Object(o.a)(n.a.mark((function e(){var t,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,j.a.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson");case 4:t=e.sent,r=t.data.features.filter((function(e){return e.properties.mag>0})),c=r.map((function(e){return{time:e.properties.time,place:e.properties.place,magnitude:e.properties.mag,tsunami:e.properties.tsunami,felt:e.properties.felt,lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]}})),s(c),h(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),h(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{class:"hero is-small",style:{backgroundColor:"#22577a"},children:Object(p.jsx)("div",{class:"hero-body has-text-centered",children:Object(p.jsx)("p",{class:"title is-1",style:{color:"#f0f8ff"},children:"Global Earthquake Monitor"})})}),Object(p.jsx)(x,{earthquakeData:r,setSelected:y}),d?Object(p.jsx)("h1",{children:"Loading..."}):Object(p.jsx)(p.Fragment,{children:b?Object(p.jsx)(f,{earthquake:b}):Object(p.jsx)(g,{firstEarthquake:r[0]})}),Object(p.jsx)("footer",{class:"footer",style:{backgroundColor:"#80ed99"},children:Object(p.jsx)("div",{class:"content has-text-centered is-primary",children:Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Made By Tyler Carroll 2021"}),Object(p.jsx)("a",{href:"https://github.com/Tyler320sc",children:Object(p.jsx)(O.a,{style:{marginLeft:"25px",marginRight:"25px",color:"black"}})}),Object(p.jsx)("a",{href:"https://twitter.com/home",children:Object(p.jsx)(O.b,{style:{color:"black"}})})]})})})]})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,384)).then((function(t){var r=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),c(e),s(e),a(e),i(e)}))};a.a.render(Object(p.jsx)(y,{}),document.getElementById("root")),v()}},[[383,1,2]]]);
//# sourceMappingURL=main.42223e22.chunk.js.map