(this["webpackJsonpreact-try1-app"]=this["webpackJsonpreact-try1-app"]||[]).push([[0],{313:function(e,a,t){},314:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(19),c=t.n(o),r=t(5),l=t(1),s=t(2),d=t(13);var y=function(){var e=n.a.useState(1),a=Object(s.a)(e,2),t=a[0],o=a[1],c=n.a.useState(["first","second","third","fourth","fifth"]),y=Object(s.a)(c,2),m=Object(s.a)(y[0],5),u=m[0],p=m[1],h=m[2],f=m[3],g=m[4],x=y[1],b=Object(r.f)(),_=n.a.useState("logo_def"),v=Object(s.a)(_,2),E=v[0],w=v[1];return Object(i.useEffect)((function(){"/"===b.pathname&&(x(["first","second","third","fourth","fifth"]),w("logo")),"/Profile"===b.pathname&&(x(["a_selected","second","third","fourth","fifth"]),w("logo_prof")),"/Education"===b.pathname&&(x(["first","a_selected","third","fourth","fifth"]),w("logo_edu")),"/Experience"===b.pathname&&(x(["first","second","a_selected","fourth","fifth"]),w("logo_exp")),"/Awards"===b.pathname&&(x(["first","second","third","a_selected","fifth"]),w("logo_awards")),"/Contact"===b.pathname&&(x(["first","second","third","fourth","a_selected"]),w("logo_cont"))}),[]),n.a.createElement("header",null,n.a.createElement(l.b.div,{className:E,key:"logo",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:0},onClick:function(){x(["first","second","third","fourth","fifth"]),w("logo")}},n.a.createElement(d.b,{to:"/"},n.a.createElement("a",{href:"#",id:"logo"},n.a.createElement("img",{src:"/website_arsam_logo_alt21.png",alt:""})))),n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement(l.b.li,{className:u,key:"profile_link",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:0},transition:{duration:.5,delay:0*t},whileTap:{scale:.9},onClick:function(){o(0),x(["a_selected","second","third","fourth","fifth"]),w("logo_prof")}},n.a.createElement(d.b,{to:"/Profile"},"PROFILE")),n.a.createElement(l.b.li,{className:p,key:"education_link",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:0},transition:{duration:.5,delay:0*t},whileTap:{scale:.9},onClick:function(){o(0),x(["first","a_selected","third","fourth","fifth"]),w("logo_edu")}},n.a.createElement(d.b,{to:"/Education"},"EDUCATION")),n.a.createElement(l.b.li,{className:h,key:"experience_link",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:0},transition:{duration:.5,delay:0*t},whileTap:{scale:.9},onClick:function(){o(0),x(["first","second","a_selected","fourth","fifth"]),w("logo_exp")}},n.a.createElement(d.b,{to:"/Experience"},"EXPERIENCE")),n.a.createElement(l.b.li,{className:f,key:"awards_link",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:0},transition:{duration:.5,delay:0*t},whileTap:{scale:.9},onClick:function(){o(0),x(["first","second","third","a_selected","fifth"]),w("logo_awards")}},n.a.createElement(d.b,{to:"/Awards"},"AWARDS")),n.a.createElement(l.b.li,{className:g,key:"contact_link",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:0},transition:{duration:.5,delay:0*t},whileTap:{scale:.9},onClick:function(){o(0),x(["first","second","third","fourth","a_selected"]),w("logo_cont")}},n.a.createElement(d.b,{to:"/Contact"},"CONTACT")))))};var m=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"footerText"}))},u=t(8),p=t(86),h=t.n(p),f=(t(108),t(109),t(87));var g=function(){var e=n.a.useState(1),a=Object(s.a)(e,2),t=(a[0],a[1]),o=n.a.useState([0,.7,1]),c=Object(s.a)(o,2),r=Object(s.a)(c[0],3),d=r[0],y=r[1],m=r[2],u=c[1];return Object(i.useEffect)((function(){t(1),t(0)}),[]),n.a.createElement("div",{className:"container-fluid"},n.a.createElement(l.b.div,{className:"carousel_container_1",key:"carousel-container",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},onMouseEnter:function(){return u([80,.3,0])},onMouseLeave:function(){return u([0,.7,1])},transition:{duration:.5,delay:.25}},n.a.createElement(f.Carousel,{className:"carousel_container_2",showArrows:!1,showStatus:!1,showIndicators:!0,showThumbs:!1,stopOnHover:!0,swipeable:!0,dynamicHeight:!1,autoPlay:!0,infiniteLoop:!0,interval:6e3},n.a.createElement("div",{className:"carousel_1"},n.a.createElement(l.b.img,{src:"/general/abb_gep.png",animate:{opacity:y}}),n.a.createElement(l.b.h1,{className:"carousel_text_1_white",key:"carousel_popup_1",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:-d},exit:{opacity:0},transition:{duration:.2,delay:0}},"Accepted to ABB Trainee Program"),n.a.createElement(l.b.p,{className:"carousel_text_2_white",key:"carousel_popup_2",initial:{opacity:0,x:0,y:-45},animate:{opacity:m,x:0,y:-45},exit:{opacity:0},transition:{duration:.2,delay:0}},"Read more \u2192"),n.a.createElement(l.b.p,{className:"carousel_text_2_white",key:"carousel_popup_3",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:1.5*-d},exit:{opacity:0},transition:{duration:.2,delay:0}},"After having finished my MBA, I got accepted into ABB's renowned trainee program for graduate engineers.",n.a.createElement("a",{className:"carousel_link_white",target:"_blank",href:"https://new.abb.com/se/en/careers/opportunities/graduates-and-entry-level-hires/abb-trainee-program-for-graduate-engineers"},"\xa0Click here to read more."))),n.a.createElement("div",{className:"carousel_1"},n.a.createElement(l.b.img,{src:"/general/automation_award.png",animate:{opacity:y}}),n.a.createElement(l.b.h1,{className:"carousel_text_1_white",key:"carousel_popup_1",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:-d},exit:{opacity:0},transition:{duration:.2,delay:0}},"Awarded Automation Student 2019"),n.a.createElement(l.b.p,{className:"carousel_text_2_white",key:"carousel_popup_2",initial:{opacity:0,x:0,y:-45},animate:{opacity:m,x:0,y:-45},exit:{opacity:0},transition:{duration:.2,delay:0}},"Read more \u2192"),n.a.createElement(l.b.p,{className:"carousel_text_2_white",key:"carousel_popup_3",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:1.5*-d},exit:{opacity:0},transition:{duration:.2,delay:0}},"I was awarded Automation Student 2019 for the best automation related master thesis in the country.",n.a.createElement("a",{className:"carousel_link_white",target:"_blank",href:"https://www.automationregion.com/arbete-om-optimering-av-kollaborativa-robotar-vinnare-i-automation-student/#.XZV77UjDPzE.linkedin"},"\xa0Click here to read more."))),n.a.createElement("div",{className:"carousel_1"},n.a.createElement(l.b.img,{src:"/general/react_website.png",animate:{opacity:y}}),n.a.createElement(l.b.h1,{className:"carousel_text_1_white",key:"carousel_popup_1",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:-d},exit:{opacity:0},transition:{duration:.2,delay:0}},"Designing a website in React"),n.a.createElement(l.b.p,{className:"carousel_text_2_white",key:"carousel_popup_2",initial:{opacity:0,x:0,y:-45},animate:{opacity:m,x:0,y:-45},exit:{opacity:0},transition:{duration:.2,delay:0}},"Read more \u2192"),n.a.createElement(l.b.p,{className:"carousel_text_2_white",key:"carousel_popup_3",initial:{opacity:0,x:0,y:0},animate:{opacity:1,x:0,y:1.5*-d},exit:{opacity:0},transition:{duration:.2,delay:0}},"During the summer of 2020, I decided to learn how to make a website in React.",n.a.createElement("a",{className:"carousel_link_white",target:"_blank",href:"https://github.com/arsamshokrian/arsamshokrian"},"\xa0Click here to view the source code for my website."))))),n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/education_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},n.a.createElement(h.a,{avgTypingDelay:100,startDelay:500,cursor:{show:!1,blink:!1,hideWhenDone:!0}},"Welcome to my website!")),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text1",initial:{opacity:0,x:0,y:40},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:.1}},"I'm ",n.a.createElement("span",{style:{color:"#ff9933"}},"Arsam Shokrian"),". I'm an engineer, an MBA graduate, and a trainee at ABB."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text2",initial:{opacity:0,x:0,y:108},animate:{opacity:1,x:0,y:68},exit:{opacity:0},transition:{duration:.5,delay:.2}},"As an engineer, I have worked on automatization, AI, programming, and physics. During my MBA studies, I learned a great deal about leadership and management. Now at ABB, I am doing my first trainee rotation as a product manager in Industrial Automation."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text3",initial:{opacity:0,x:0,y:224},animate:{opacity:1,x:0,y:184},exit:{opacity:0},transition:{duration:.5,delay:.3}},"Browse my website to find out more about me, my work, and my ongoing projects! Press the\xa0",n.a.createElement("img",{height:15,src:"/website_arsam_logo_alt2.png",alt:""})," icon to return to this page.")))};var x=function(){var e=n.a.useState(0),a=Object(s.a)(e,2),t=a[0],o=(a[1],n.a.useState(1)),c=Object(s.a)(o,2),r=c[0],d=c[1];return Object(i.useEffect)((function(){d(1),d(0)}),[]),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"box-container"},n.a.createElement(u.a,{height:400,duration:300},(function(e){return n.a.createElement(l.b.img,{className:"profile_pic",src:"/home/website_arsam_picture_smallest.png",alt:"",key:"profile_pic_key",transition:{duration:1,delay:.5*r},whileHover:{scaleX:1.05,scaleY:1.05},whileTap:{scale:.9},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:1,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onLoad:e})}))),function(e){switch(e){case 0:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/education_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Profile"),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text1",initial:{opacity:0,x:0,y:40},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:.1}},"Gained consulting experience managing two projects regarding the development of mobile applications using indoor tracking and holographic reality."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text2",initial:{opacity:0,x:0,y:132},animate:{opacity:1,x:0,y:92},exit:{opacity:0},transition:{duration:.5,delay:.2}},"International and multi-cultural experience from living and studying in Sweden, Austria, and the USA."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text3",initial:{opacity:0,x:0,y:200},animate:{opacity:1,x:0,y:160},exit:{opacity:0},transition:{duration:.5,delay:.3}},"Winner of Automation Student 2019 Award for best automation-related master thesis of the year. Fluent in Swedish, Persian, and English."));default:return null}}(t))},b=t(15),_=t.n(b);var v=function(){var e=n.a.useState(0),a=Object(s.a)(e,2),t=a[0],o=a[1],c=n.a.useState(1),r=Object(s.a)(c,2),d=r[0],y=r[1],m=n.a.useState([1,1,1,1]),p=Object(s.a)(m,2),h=Object(s.a)(p[0],4),f=h[0],g=h[1],x=h[2],b=h[3],v=p[1];return Object(i.useEffect)((function(){y(1),y(0)}),[]),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"box-container"},n.a.createElement(l.b.div,{className:"box1_edu",key:"/chalmers_pic",transition:{duration:.5,delay:.25*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#008000"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:f,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(1!==t?1:0),v(1.1===f?[1,1,1,1]:[1.1,1,1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/education/chalmers_logo4.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box2_edu",key:"/graz_pic",transition:{duration:.5,delay:.5*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#008000"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:g,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(2!==t?2:0),v(1.1===g?[1,1,1,1]:[1,1.1,1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/education/graz_logo4.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box3_edu",key:"/nau_pic",transition:{duration:.5,delay:.75*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#008000"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:x,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(3!==t?3:0),v(1.1===x?[1,1,1,1]:[1,1,1.1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/education/nau_logo4.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box4_edu",key:"box4",transition:{duration:.5,delay:1*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#008000"},whileTap:{scale:.9},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:b,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}}},n.a.createElement(_.a,{params:{particles:{number:{value:50,density:{enable:!1,value_area:600}},color:{value:"#000000"},shape:{type:"image",image:{src:"/general/leaf1.png",width:1,height:1},stroke:{width:0,color:"#ffffff"}},opacity:{value:.2,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:5,direction:"left",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{height:"100%",width:"100%"}}))),function(e){switch(e){case 0:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/education_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Education"),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text1",initial:{opacity:0,x:0,y:40},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:.1}},"After several years of advanced study, I have attained two graduate and one undergraduate degree."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text2",initial:{opacity:0,x:0,y:108},animate:{opacity:1,x:0,y:68},exit:{opacity:0},transition:{duration:.5,delay:.2}},"The degrees include a ",n.a.createElement("span",{style:{color:"#ff9933",fontWeight:"bold"}},"Master of Business Administration")," from the W.A. Franke College of Business at Northern Arizona University, and a ",n.a.createElement("span",{style:{color:"#ff9933",fontWeight:"bold"}},"Master of Science in Engineering")," and a ",n.a.createElement("span",{style:{color:"#ff9933",fontWeight:"bold"}},"Bachelor of Science")," from Chalmers University of Technology."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text3",initial:{opacity:0,x:0,y:224},animate:{opacity:1,x:0,y:184},exit:{opacity:0},transition:{duration:.5,delay:.3}},"My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));case 1:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/chalmers_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Chalmers University of Technology"),n.a.createElement(l.b.p,{className:"education-text-2",key:"/chalmers_text1",initial:{opacity:0,x:0,y:40},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:.1}},"The engineering program I studied at Chalmers was in Engineering Physics and included a BSc and a MSc."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/chalmers_text2",initial:{opacity:0,x:0,y:151},animate:{opacity:1,x:0,y:111},exit:{opacity:0},transition:{duration:.5,delay:.2}},"During the degrees, I learned a great deal about technical subjects concerning advanced mathematics and physics. However, most of all, I learned how to solve complex problems in different fields under intense time pressure."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/chalmers_text3",initial:{opacity:0,x:0,y:267},animate:{opacity:1,x:0,y:227},exit:{opacity:0},transition:{duration:.5,delay:.3}},"The program included two theses, one each for the BSc and the MSc. My bachelor's thesis was about creating autonomous robots that would avoid colliding with each other. Read about it ",n.a.createElement("span",{style:{color:"#ff9933",fontWeight:"bold"}},"here"),". My master's thesis was about developing adaptive collaborative robots in ABBs robot simulation software RobotStudio. You can read about it ",n.a.createElement("span",{style:{color:"#ff9933",fontWeight:"bold"}},"here"),"."));case 2:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/graz_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Graz University of Technology"),n.a.createElement(l.b.p,{className:"education-text-2",key:"/graz_text",initial:{opacity:0,x:0,y:40},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:.1}},"During the first year of my Master of Science, I was able to take part of the ",n.a.createElement("span",{style:{color:"#ff9933",fontWeight:"bold"}},"ERASMUS+ programme")," and study a year abroad in Graz, Austria."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/graz_text2",initial:{opacity:0,x:0,y:171},animate:{opacity:1,x:0,y:131},exit:{opacity:0},transition:{duration:.5,delay:.2}},"I studied in Technische Universit\xe4t Graz, where I took engineering courses related to my degree. Some of the courses were Adaptive Systems, Embedded Systems, and Optimization for Computer Science."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/graz_text3",initial:{opacity:0,x:0,y:287},animate:{opacity:1,x:0,y:247},exit:{opacity:0},transition:{duration:.5,delay:.3}},"Living and studying in a foreign country proved to be an invaluable experience both personally and professionally."));case 3:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/nau_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Northern Arizona ",n.a.createElement("br",null)," University"),n.a.createElement(l.b.p,{className:"education-text-2",key:"/nau_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:.1}},"After I completed my engineering degree, I decided to complement my technical skills with managerial and business knowledge. I therefore chose to pursue an MBA, and I wanted to do it in the country famous for its managerial university degrees."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/nau_text2",initial:{opacity:0,x:0,y:195},animate:{opacity:1,x:0,y:155},exit:{opacity:0},transition:{duration:.5,delay:.2}},"I chose Northern Arizona University because of its repuation, location, and opportunities. It proved to be a good decision as I got to experience a beautiful city where I could expand my knowledge."),n.a.createElement(l.b.p,{className:"education-text-1",key:"/nau_text3",initial:{opacity:0,x:0,y:287},animate:{opacity:1,x:0,y:247},exit:{opacity:0},transition:{duration:.5,delay:.3}},"At NAU, I studied many courses related to business, management, leadership, accounting, and finance. I learned how to lead and develop people, how to use lean principles, and how to manage and analyze a company financially."));default:return null}}(t))};var E=function(){var e=n.a.useState(0),a=Object(s.a)(e,2),t=a[0],o=a[1],c=n.a.useState(1),r=Object(s.a)(c,2),d=r[0],y=r[1],m=n.a.useState([1,1,1,1]),p=Object(s.a)(m,2),h=Object(s.a)(p[0],4),f=h[0],g=h[1],x=h[2],b=h[3],v=p[1];return Object(i.useEffect)((function(){y(1),y(0)}),[]),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"box-container"},n.a.createElement(l.b.div,{className:"box1_exp",key:"/chalmers_pic",transition:{duration:.5,delay:.25*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#e62e00"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:f,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(1!==t?1:0),v(1.1===f?[1,1,1,1]:[1.1,1,1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/experience/website_ABB_logo3.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box2_exp",key:"/graz_pic",transition:{duration:.5,delay:.5*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#e62e00"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:g,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(2!==t?2:0),v(1.1===g?[1,1,1,1]:[1,1.1,1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/experience/website_virtual_logo.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box3_exp",key:"/nau_pic",transition:{duration:.5,delay:.75*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#e62e00"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:x,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(3!==t?3:0),v(1.1===x?[1,1,1,1]:[1,1,1.1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/experience/website_circ_logo5.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box4_exp",key:"box4",transition:{duration:.5,delay:1*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#e62e00"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:b,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}}},n.a.createElement(_.a,{params:{particles:{number:{value:50,density:{enable:!1,value_area:600}},color:{value:"#000000"},shape:{type:"image",image:{src:"/general/leaf1.png",width:1,height:1},stroke:{width:0,color:"#ffffff"}},opacity:{value:.2,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:5,direction:"left",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:50,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{height:"100%",width:"100%"}}))),function(e){switch(e){case 0:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/education_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Experience"),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"After several years of advanced study, I have attained two graduate and one undergraduate degree. The degrees include an MBA from the W.A. Franke College of Business at Northern Arizona University, and a Master of Science in Engineering and a Bachelor of Science from Chalmers University of Technology. My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));case 1:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/chalmers_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"ABB"),n.a.createElement(l.b.p,{className:"education-text-1",key:"/chalmers_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"After several years of advanced study, I have attained two graduate and one undergraduate degree. The degrees include an MBA from the W.A. Franke College of Business at Northern Arizona University, and a Master of Science in Engineering and a Bachelor of Science from Chalmers University of Technology. My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));case 2:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/graz_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Virtual Manufacturing"),n.a.createElement(l.b.p,{className:"education-text-1",key:"/graz_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"After several years of advanced study, I have attained two graduate and one undergraduate degree. The degrees include an MBA from the W.A. Franke College of Business at Northern Arizona University, and a Master of Science in Engineering and a Bachelor of Science from Chalmers University of Technology. My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));case 3:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/nau_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Chalmers International Reception Committee"),n.a.createElement(l.b.p,{className:"education-text-2",key:"/nau_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"After several years of advanced study, I have attained two graduate and one undergraduate degree. The degrees include an MBA from the W.A. Franke College of Business at Northern Arizona University, and a Master of Science in Engineering and a Bachelor of Science from Chalmers University of Technology. My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));default:return null}}(t))};var w=function(){var e=n.a.useState(0),a=Object(s.a)(e,2),t=a[0],o=a[1],c=n.a.useState(1),r=Object(s.a)(c,2),d=r[0],y=r[1],m=n.a.useState([1,1,1,1]),p=Object(s.a)(m,2),h=Object(s.a)(p[0],4),f=h[0],g=h[1],x=h[2],b=h[3],v=p[1];return Object(i.useEffect)((function(){y(1),y(0)}),[]),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"box-container"},n.a.createElement(l.b.div,{className:"box1_awa",key:"/automation_pic",transition:{duration:.5,delay:.25*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#ffbf00"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:f,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(1!==t?1:0),v(1.1===f?[1,1,1,1]:[1.1,1,1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/awards/automation_region.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box2_awa",key:"/franke_pic",transition:{duration:.5,delay:.5*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#ffbf00"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:g,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(2!==t?2:0),v(1.1===g?[1,1,1,1]:[1,1.1,1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/awards/nau_franke.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box3_awa",key:"wallenberg_pic",transition:{duration:.5,delay:.75*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#ffbf00"},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:x,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}},onClick:function(){o(3!==t?3:0),v(1.1===x?[1,1,1,1]:[1,1,1.1,1])}},n.a.createElement(u.a,{height:400,duration:200},(function(e){return n.a.createElement("img",{src:"/awards/wallenberg2.png",alt:"",onLoad:e})}))),n.a.createElement(l.b.div,{className:"box4_awa",key:"box4",transition:{duration:.5,delay:1*d},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#ffbf00"},whileTap:{scale:.9},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:b,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}}},n.a.createElement(_.a,{params:{particles:{number:{value:50,density:{enable:!1,value_area:600}},color:{value:"#000000"},shape:{type:"image",image:{src:"/general/leaf1.png",width:1,height:1},stroke:{width:0,color:"#ffffff"}},opacity:{value:.2,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:5,direction:"left",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:50,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{height:"100%",width:"100%"}}))),function(e){switch(e){case 0:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/education_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Awards"),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"After several years of advanced study, I have attained two graduate and one undergraduate degree. The degrees include an MBA from the W.A. Franke College of Business at Northern Arizona University, and a Master of Science in Engineering and a Bachelor of Science from Chalmers University of Technology. My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));case 1:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/chalmers_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Automation Student 2019"),n.a.createElement(l.b.p,{className:"education-text-1",key:"/chalmers_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"After several years of advanced study, I have attained two graduate and one undergraduate degree. The degrees include an MBA from the W.A. Franke College of Business at Northern Arizona University, and a Master of Science in Engineering and a Bachelor of Science from Chalmers University of Technology. My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));case 2:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/graz_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"W.A. Franke College of Business"),n.a.createElement(l.b.p,{className:"education-text-2",key:"/graz_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"After several years of advanced study, I have attained two graduate and one undergraduate degree. The degrees include an MBA from the W.A. Franke College of Business at Northern Arizona University, and a Master of Science in Engineering and a Bachelor of Science from Chalmers University of Technology. My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));case 3:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/nau_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Dr. Tech. Marcus Wallenberg Foundation"),n.a.createElement(l.b.p,{className:"education-text-2",key:"/nau_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"After several years of advanced study, I have attained two graduate and one undergraduate degree. The degrees include an MBA from the W.A. Franke College of Business at Northern Arizona University, and a Master of Science in Engineering and a Bachelor of Science from Chalmers University of Technology. My MBA had a concentration on Applied Management, while my MSc was in System, Control and Mechatronics, and my BSc was in Engineering Physics."));default:return null}}(t))};var k=function(){var e=n.a.useState(0),a=Object(s.a)(e,2),t=a[0],o=(a[1],n.a.useState(1)),c=Object(s.a)(o,2),r=c[0],d=c[1];return Object(i.useEffect)((function(){d(1),d(0)}),[]),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"box-container"},n.a.createElement(l.b.div,{className:"box_big_cont",key:"box4",transition:{duration:.5,delay:.25*r},whileHover:{scaleX:1.05,scaleY:1.05,backgroundColor:"#dc6fb8"},whileTap:{scale:.9},initial:{opacity:0,scale:1,x:0,y:50},animate:{opacity:1,scale:1,x:0,y:-10},exit:{opacity:0,scale:1,transition:{staggerChildren:.5}}},n.a.createElement(_.a,{params:{particles:{number:{value:50,density:{enable:!1,value_area:600}},color:{value:"#000000"},shape:{type:"image",image:{src:"/general/leaf1.png",width:1,height:1},stroke:{width:0,color:"#ffffff"}},opacity:{value:.2,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:5,direction:"left",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.2},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{height:"100%",width:"100%"}}))),function(e){switch(e){case 0:return n.a.createElement("div",{className:"text-container"},n.a.createElement(l.b.h1,{className:"education-text-h",key:"/education_text_h",initial:{opacity:0,x:0,y:20},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"Contact"),n.a.createElement(l.b.p,{className:"education-text-1",key:"/education_text",initial:{opacity:0,x:0,y:50},animate:{opacity:1,x:0,y:0},exit:{opacity:0},transition:{duration:.5,delay:0}},"You can reach me at by email at arsamshokrian@gmail.com or connect with me on linkedin here."));default:return null}}(t))};t(313);var N=function(){var e=Object(r.f)();return n.a.createElement("div",{className:"App"},n.a.createElement(y,null),n.a.createElement(l.a,{exitBeforeEnter:!0},n.a.createElement(r.c,{location:e,key:e.pathname},n.a.createElement(r.a,{exact:!0,path:"/",component:g}),n.a.createElement(r.a,{exact:!0,path:"/Profile",component:x}),n.a.createElement(r.a,{exact:!0,path:"/Education",component:v}),n.a.createElement(r.a,{exact:!0,path:"/Experience",component:E}),n.a.createElement(r.a,{exact:!0,path:"/Awards",component:w}),n.a.createElement(r.a,{exact:!0,path:"/Contact",component:k}))),n.a.createElement(m,null))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d.a,null,n.a.createElement(N,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");A?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(a,e)}))}}()},88:function(e,a,t){e.exports=t(314)}},[[88,1,2]]]);
//# sourceMappingURL=main.bc8e68c3.chunk.js.map