(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){},83:function(e,t,i){},84:function(e,t,i){},85:function(e,t,i){},86:function(e,t,i){},89:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),s=i(22),a=i.n(s),r=(i(61),i(62),i(103)),o=i(104),d=i(105),h=i(108),j=i(25),l=(i(63),i(1)),b=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(j.b,{to:"/airbnb-clone",children:Object(l.jsx)("img",{className:"header_icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:""})}),Object(l.jsxs)("div",{className:"header_center",children:[Object(l.jsx)("input",{type:"text"}),Object(l.jsx)(r.a,{})]}),Object(l.jsxs)("div",{className:"header_right",children:[Object(l.jsx)("a",{children:"Become a host"}),Object(l.jsx)(o.a,{}),Object(l.jsx)(d.a,{}),Object(l.jsx)(h.a,{})]})]})},m=i(21),p=i(107),u=(i(73),i(5)),x=(i(74),i(75),i(76),i(51)),O=i(106),g=function(){var e=Object(c.useState)(new Date),t=Object(m.a)(e,2),i=t[0],n=t[1],s=Object(c.useState)(new Date),a=Object(m.a)(s,2),r=a[0],o=a[1],d={startDate:i,endDate:r,key:"selection"};return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(x.DateRangePicker,{ranges:[d],onChange:function(e){n(e.selection.startDate),o(e.selection.endDate)}}),Object(l.jsxs)("h2",{children:["Number of Guest ",Object(l.jsx)(O.a,{})]}),Object(l.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(l.jsx)(p.a,{children:"search Airbnb"})]})},f=function(){var e=Object(u.f)(),t=Object(c.useState)(!1),i=Object(m.a)(t,2),n=i[0],s=i[1];return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsxs)("div",{className:"banner_search",children:[n&&Object(l.jsx)(g,{}),Object(l.jsx)(p.a,{onClick:function(){return s(!n)},variant:"outlined",className:"banner_searchButton",children:n?"Hide":"Search Dates"})]}),Object(l.jsxs)("div",{className:"banner_info",children:[Object(l.jsx)("h1",{children:"Get out and Stretch your Imagination"}),Object(l.jsx)("h5",{children:"Plan a different kind of Gataway to uncover the hidden gems near you."}),Object(l.jsx)(p.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})},v=(i(83),function(e){var t=e.src,i=e.title,c=e.description,n=e.price;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:t,alt:""}),Object(l.jsxs)("div",{className:"card_info",children:[Object(l.jsx)("h2",{children:i}),Object(l.jsx)("h4",{children:c}),Object(l.jsx)("h2",{children:n})]})]})}),_=(i(84),function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(f,{}),Object(l.jsxs)("div",{className:"home_section",children:[Object(l.jsx)(v,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(l.jsx)(v,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(l.jsx)(v,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})]}),Object(l.jsxs)("div",{className:"home_section",children:[Object(l.jsx)(v,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"\xa3130/night"}),Object(l.jsx)(v,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"\xa3350/night"}),Object(l.jsx)(v,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"\xa370/night"})]})]})}),w=(i(85),i(86),i(52)),y=i.n(w),N=i(53),F=i.n(N);var P=function(e){var t=e.img,i=e.location,c=e.title,n=e.description,s=e.star,a=e.price,r=e.total;return Object(l.jsxs)("div",{className:"searchResult",children:[Object(l.jsx)("img",{src:t,alt:""}),Object(l.jsx)(y.a,{className:"searchResult_heart"}),Object(l.jsxs)("div",{className:"searchResult_info",children:[Object(l.jsxs)("div",{className:"searchResult_infoTop",children:[Object(l.jsx)("p",{children:i}),Object(l.jsx)("h3",{children:c}),Object(l.jsx)("p",{children:"____"}),Object(l.jsx)("p",{children:n})]}),Object(l.jsxs)("div",{className:"searchResult_infoBottom",children:[Object(l.jsxs)("div",{className:"searchResult_stars",children:[Object(l.jsx)(F.a,{className:"searchResult_star"}),Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:s})})]}),Object(l.jsxs)("div",{className:"searchResults_price",children:[Object(l.jsx)("h2",{children:a}),Object(l.jsx)("p",{children:r})]})]})]})]})},S=function(){return Object(l.jsxs)("div",{className:"searchPage",children:[Object(l.jsxs)("div",{className:"searchPage_info",children:[Object(l.jsx)("p",{children:"62 stays \xb7 26 august to 30 august \xb7 2 guest"}),Object(l.jsx)("h1",{children:"Stays nearby"}),Object(l.jsx)(p.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(l.jsx)(p.a,{variant:"outlined",children:"Type of place"}),Object(l.jsx)(p.a,{variant:"outlined",children:"Price"}),Object(l.jsx)(p.a,{variant:"outlined",children:"Rooms and beds"}),Object(l.jsx)(p.a,{variant:"outlined",children:"More filters"})]}),Object(l.jsx)(P,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"\xa330 / night",total:"\xa3117 total"}),Object(l.jsx)(P,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"\xa340 / night",total:"\xa3157 total"}),Object(l.jsx)(P,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"\xa335 / night",total:"\xa3207 total"}),Object(l.jsx)(P,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"\xa355 / night",total:"\xa3320 total"}),Object(l.jsx)(P,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"\xa360 / night",total:"\xa3450 total"}),Object(l.jsx)(P,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"\xa365 / night",total:"\xa3480 total"}),Object(l.jsx)(P,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"\xa390 / night",total:"\xa3650 total"})]})};var L=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/airbnb-clone",children:Object(l.jsx)(_,{})}),Object(l.jsx)(u.a,{path:"/search",children:Object(l.jsx)(S,{})})]})]})})},k=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,109)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),c(e),n(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),k()}},[[89,1,2]]]);
//# sourceMappingURL=main.d9630832.chunk.js.map