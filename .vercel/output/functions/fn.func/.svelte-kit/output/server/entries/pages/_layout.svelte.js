import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
const darkmode = writable(false);
const ThemeInitializer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_darkmode;
  $$unsubscribe_darkmode = subscribe(darkmode, (value) => value);
  $$unsubscribe_darkmode();
  return `${$$result.head += `<!-- HEAD_svelte-a95tvq_START --><script data-svelte-h="svelte-9qwd8z">window.prefersDarkmode = false;

    if (localStorage.theme === "dark" || (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      window.prefersDarkMode = true;
      document.documentElement.classList.add("dark"); 
    } else {
      document.documentElement.classList.remove("dark");
    }<\/script><!-- HEAD_svelte-a95tvq_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
const app = "";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: klass = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  return `<svg${add_attribute("class", klass, 0)} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85 50" style="enable-background:new 0 0 85 50;" xml:space="preserve"><style type="text/css">.st0 {
      fill: #8486a6;
    }
    .st1 {
      fill: #71738f;
    }
    .st2 {
      fill: #d2d2d9;
    }
    .st3 {
      fill: #ecebeb;
    }
    .st4 {
      fill: #f5f5f5;
    }
    .st5 {
      fill: #ee9c79;
    }
    .st6 {
      fill: #de9070;
    }
    .st7 {
      fill: #ff4646;
    }
    .st8 {
      fill: #ffffff;
    }
    .st9 {
      fill: #dedede;
    }
    .st10 {
      fill: #613c24;
    }
    .st11 {
      fill: #553520;
    }
    .st12 {
      fill: #b63c3c;
    }
    .st13 {
      fill: none;
      stroke: #db8f6f;
      stroke-width: 0.5;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
    .st14 {
      fill: #dbdada;
    }
    .st15 {
      fill: #e6e4e4;
    }
  </style><path class="st0" d="M49.5,48.9v-1H31.9v1.9h17.1L49.5,48.9L49.5,48.9z"></path><path class="st1" d="M41.7,47.9l-1.2,1.9h-8.6v-1.9H41.7L41.7,47.9z"></path><path class="st2" d="M56.2,24.5L47,49.8h1.6l9.3-25.3H56.2L56.2,24.5z"></path><path class="st3" d="M73.4,49.8l8.9-24.5l-24.4-0.8l-9.3,25.3H73.4L73.4,49.8z"></path><polygon class="st4" points="80.6,29.9 77.6,38.3 62.6,49.8 53.6,49.8 65.7,41 65.6,41.4 66.8,41.7 67.1,40 67.1,39.9 68.6,38.8 
	68.7,39 69.3,39.8 72,37.4 71.7,37.1 71.4,36.7 "></polygon><path class="st4" d="M68.3,49.8l7.1-5.5l-2,5.5H68.3z"></path><path class="st5" d="M9.1,45.7l-0.1,1L8.8,48c-2.3,0.2-5.6,1.2-7.4,1.7C1,49.8,0.7,49.9,0.5,50c0-0.3,0.1-3.2,0.3-5.1
	c0,0,0.5-0.3,1.3-0.6l0,0c1.4-0.7,3.6-1.8,3.8-1.9c0.1,0,0.2,0,0.4,0.2C7.2,43.3,9.1,45.7,9.1,45.7L9.1,45.7L9.1,45.7z"></path><path class="st6" d="M9.9,46.6l-0.9,0l-7.4,0.2l-0.2,2.8C1,49.8,0.7,49.9,0.5,50c0-0.3,0.1-3.2,0.3-5.1c0,0,0.5-0.3,1.3-0.6l0,0
	l4.2-1.7l1.8-0.7L9.9,46.6L9.9,46.6L9.9,46.6z"></path><path class="st5" d="M32.1,43.5c0.9-1.6,5.2-4.7,6.9-5c0.6,0,0.1,2-1.9,2.9c1.7-0.2,9-0.3,8.9,0.8c0,0.9-0.3,1-0.8,2.2
	s-0.5,2.5-1.6,2.8c-2.7,1-2.1-0.6-6.3,0.3c-1.3,0.7-2,1.8-3.1,2.1L32.1,43.5L32.1,43.5L32.1,43.5z"></path><path class="st7" d="M32.2,43.6c0.7-1,4.8-4.4,6.5-5c0.3-1.4-1.9-9.8-3.5-10.5c-1.7-1-3.9-1.7-4.8-1.9c-0.3-0.1-1.3-0.5-2.6-0.8
	c0,0-0.1,0-0.1,0c-2.8-0.7-7.1-1.6-9.9-1.6c-0.3,0-0.6,0-0.9,0c-0.3,0-0.6,0.1-1,0.1c-3.5,0.4-10.8,1.6-11.8,3
	C2.6,29.7-1.3,41.9,0.5,50h30.7c0,0,2.4,0,3.1-0.6C34.3,46.5,32.8,43.7,32.2,43.6L32.2,43.6L32.2,43.6z"></path><path class="st8" d="M28.3,25.7c0,0.2,0,0.4-0.1,0.6c0,0.4-0.1,0.8-0.3,1.2c-0.1,0.3-0.3,0.6-0.5,0.8c-3.6,5.9-12.6,3.4-11.7-4.4
	c0.4-0.1,0.7-0.1,1-0.1c0.3,0,0.6,0,0.9,0c2.9,0,7.4,1,10.4,1.9C28.2,25.7,28.2,25.7,28.3,25.7L28.3,25.7L28.3,25.7z"></path><path class="st5" d="M26.9,26.8c0.1,2.3-8.6,5.5-9.4-1c-0.1-0.5-0.1-1.1,0-1.8c0.5-0.7,1-3.4,1.4-5.9c0-0.1,0-0.1,0.1-0.2
	C19.6,16.5,26.7,22.6,26.9,26.8L26.9,26.8L26.9,26.8z"></path><g><path class="st6" d="M18.8,18.1c0,0,8.1,8.3,8.1,8.6C21.2,26.8,19,24.3,18.8,18.1z"></path><path class="st6" d="M20.2,19.6l-0.5,1c0,0-0.6,3.8-2.2,5.2c-0.1-0.5-0.1-1.1,0-1.8c0.5-0.7,1-3.4,1.4-5.9l1.3-0.2L20.2,19.6
		L20.2,19.6z"></path></g><path class="st9" d="M28.3,25.7c0,0,0,1.4-0.5,2l-1.2-0.1c0,0,0.4-0.6,0.3-1.1s0.6-1.6,0.6-1.6L28.3,25.7L28.3,25.7z"></path><path class="st5" d="M32.2,14.2c0.1,2.6,0.5,8-4.4,11.9c-3.2,2.6-8.6-3.6-9.4-9.8c-0.7-6.3,2-10.3,5.7-11
	C34.1,3.2,32.3,8.7,32.2,14.2L32.2,14.2L32.2,14.2z"></path><path class="st10" d="M24.2,8.8c-1,1.3-0.5,2.1-3.4,2.6c-0.1,1.4,0,3-0.4,3.7c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.2
	c-0.2,0.2-0.4,0.2-0.8-0.1c-1.7-1.2-3.3-1.9-3.8-3.4c-0.5-1.5-0.9-4.8,0.1-6.2c0.2-0.3,0.4-0.5,0.7-0.6c0.1-0.1,0.3-0.1,0.4-0.1
	C16.9,5,17,4.9,17,4.8c0-0.1,0.1-0.1,0.1-0.2c0.1-0.2,0.3-0.4,0.4-0.7c2.4-3.5,6.4-3.6,5.5-2c3.1-3.1,13.1-0.3,12.8,4.7
	C41,14.7,27.4,12.6,24.2,8.8z"></path><path class="st10" d="M16.8,5.3c0,0-0.8-0.2-1-0.1c-0.2,0.1,0.1-0.7,0.3-0.7c0.2,0,0.8,0.2,1,0.4c0-0.5-0.2-1.5,0.2-1.6
	c0.4-0.1,0.1,1,0.1,1L16.8,5.3C16.8,5.3,16.8,5.3,16.8,5.3z"></path><path class="st11" d="M20.9,11.4c-0.1,1.4-0.1,3.1-0.5,3.8c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.1l0,0c-0.2,0.2-0.5,0.1-1-0.2
	c-1.6-1.2-3.2-1.9-3.6-3.4s-0.9-4.8,0.1-6.2c0.7,1.5,2.1,3.1,3.2,3C20,8.7,20.9,11.4,20.9,11.4z"></path><path class="st12" d="M7.1,46.8c0,0,1.1-4.7,0.9-7c-0.2-2.4,0.9,5.7,0.8,6.2c-0.2,0.4,22.2-3,23.4-2.3C30.6,44.1,9.8,46.6,7.1,46.8
	L7.1,46.8L7.1,46.8z"></path><path class="st12" d="M33,42.8c0.2-0.5,0.9-3.8-0.6-5.6C32.7,38.5,33,42.8,33,42.8z"></path><g><path class="st5" d="M18.8,12.9c0.2,1.3,0.1,2.6-0.8,2.8c-0.9,0.2-2.1-0.7-2.4-2s0.2-2.5,1.1-2.8C18,10.5,18.6,11.4,18.8,12.9
		L18.8,12.9L18.8,12.9z"></path><path class="st13" d="M16.4,12.5c0.3-0.4,1.9-1.1,1.6,1.4c0,0-0.4-0.7-0.6-0.5"></path></g><g><path class="st14" d="M65.7,35.1l-0.8-1l-2.6,2.4l2.2,2.9l0.9-0.9l-1.5-1.8L65.7,35.1z"></path><polygon class="st15" points="67.1,39.9 67.1,40 66.8,41.7 65.6,41.4 65.7,41 	"></polygon><polygon class="st14" points="68.6,32.6 67.1,39.9 65.7,41 65.7,40.9 65.7,40.9 67.4,32.3 	"></polygon><polygon class="st15" points="72,37.4 69.3,39.8 68.7,39 68.6,38.8 68.6,38.8 71.4,36.7 71.7,37.1 	"></polygon><polygon class="st14" points="68.6,38.8 70.3,37.2 68.8,35.4 69.7,34.5 71.4,36.7 	"></polygon></g><path class="st0" d="M156.9,48.2v-0.9h-15.2v1.8h14.8L156.9,48.2L156.9,48.2z"></path><path class="st1" d="M150.2,47.3l-1,1.8h-7.4v-1.8H150.2L150.2,47.3z"></path><path class="st2" d="M162.7,25.7l-8,23.3h1.4l8-23.3H162.7L162.7,25.7z"></path><path class="st3" d="M177.6,49.1l7.6-22.6l-21.1-0.7l-8,23.3H177.6L177.6,49.1z"></path><polygon class="st4" points="183.8,30.7 181.2,38.5 168.2,49.1 160.4,49.1 170.9,40.9 170.8,41.3 171.8,41.5 172.1,40 172.1,39.9 
	173.4,38.9 173.5,39.1 174.1,39.8 176.4,37.6 176.1,37.3 175.9,36.9 "></polygon><path class="st4" d="M173.1,49.1l6.2-5.1l-1.7,5.1H173.1z"></path><path class="st5" d="M118.9,44.9l-0.1,1l-0.2,1.3c-2.3,0.2-5.6,1.2-7.4,1.7c-0.4,0.1-0.7,0.2-0.9,0.3c0-0.3,0.1-3.2,0.3-5.1
	c0,0,0.5-0.3,1.3-0.6l0,0c1.4-0.7,3.6-1.8,3.8-1.9c0.1,0,0.2,0,0.4,0.2C117,42.5,118.9,44.9,118.9,44.9L118.9,44.9L118.9,44.9z"></path><path class="st6" d="M119.7,45.9l-0.9,0l-7.4,0.2l-0.2,2.8c-0.4,0.1-0.6,0.2-0.9,0.3c0-0.3,0.1-3.2,0.3-5.1c0,0,0.5-0.3,1.3-0.6l0,0
	l4.2-1.7L118,41L119.7,45.9L119.7,45.9L119.7,45.9z"></path><path class="st5" d="M141.9,42.7c0.9-1.6,5.2-4.7,6.9-5c0.6,0,0.1,2-1.9,2.9c1.7-0.2,9-0.3,8.9,0.8c0,0.9-0.3,1-0.8,2.2
	s-0.5,2.5-1.6,2.8c-2.7,1-2.1-0.6-6.3,0.3c-1.3,0.7-2,1.8-3.1,2.1L141.9,42.7L141.9,42.7L141.9,42.7z"></path><path class="st7" d="M142,42.8c0.7-1,4.8-4.4,6.5-5c0.3-1.4-1.9-9.8-3.5-10.5c-1.7-1-3.9-1.7-4.8-1.9c-0.3-0.1-1.3-0.5-2.6-0.8
	c-0.1,0-0.1,0-0.1,0c-2.8-0.7-7.1-1.6-9.9-1.6c-0.3,0-0.6,0-0.9,0c-0.3,0-0.6,0.1-1,0.1c-3.5,0.4-10.8,1.6-11.8,3
	c-1.6,2.5-5.5,14.8-3.7,22.9H141c0,0,2.4,0,3.1-0.6C144.1,45.7,142.6,43,142,42.8L142,42.8L142,42.8z"></path><path class="st8" d="M138.1,25c0,0.2,0,0.4-0.1,0.6c-0.1,0.4-0.1,0.8-0.3,1.2c-0.1,0.3-0.3,0.6-0.4,0.8c-3.6,5.9-12.6,3.4-11.7-4.4
	c0.4-0.1,0.7-0.1,1-0.1c0.3,0,0.6,0,0.9,0c2.9,0,7.4,1,10.4,1.9C138,24.9,138.1,24.9,138.1,25L138.1,25L138.1,25z"></path><path class="st5" d="M136.7,26c0.1,2.3-8.6,5.5-9.5-1c-0.1-0.5-0.1-1.1,0-1.8c0.5-0.7,1-3.4,1.4-5.9c0-0.1,0-0.1,0.1-0.2
	C129.4,15.8,136.6,21.8,136.7,26L136.7,26L136.7,26z"></path><g><path class="st6" d="M128.6,17.4c0,0,8.1,8.3,8.1,8.6C131,26.1,128.8,23.5,128.6,17.4z"></path><path class="st6" d="M130,18.8l-0.5,1c0,0-0.6,3.8-2.2,5.2c-0.1-0.5-0.1-1.1,0-1.8c0.6-0.7,1-3.4,1.4-5.9l1.3-0.2L130,18.8
		L130,18.8z"></path></g><path class="st9" d="M138.1,25c0,0,0,1.4-0.5,2l-1.2-0.1c0,0,0.4-0.6,0.3-1.1s0.6-1.6,0.6-1.6L138.1,25L138.1,25z"></path><path class="st5" d="M142,13.4c0.1,2.6,0.5,8-4.4,11.9c-3.2,2.6-8.6-3.6-9.4-9.8c-0.7-6.3,2-10.3,5.7-11C143.9,2.4,142.2,8,142,13.4
	L142,13.4L142,13.4z"></path><path class="st10" d="M134.1,8c-1,1.3-0.5,2.1-3.4,2.6c-0.1,1.4,0,3-0.4,3.7c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.2
	c-0.2,0.2-0.4,0.2-0.8-0.1c-1.7-1.2-3.3-1.9-3.8-3.4c-0.5-1.5-0.9-4.8,0.1-6.2c0.2-0.3,0.4-0.5,0.7-0.6c0.1-0.1,0.3-0.1,0.4-0.1
	c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.2c0.1-0.2,0.3-0.4,0.4-0.7c2.4-3.5,6.4-3.6,5.5-2c3.1-3.1,13.1-0.3,12.8,4.7
	C150.9,13.9,137.2,11.8,134.1,8z"></path><path class="st10" d="M126.6,4.5c0,0-0.8-0.2-1-0.1c-0.2,0.1,0.1-0.7,0.3-0.7s0.8,0.2,1,0.4c0-0.5-0.2-1.5,0.2-1.6
	c0.4-0.1,0.1,1,0.1,1L126.6,4.5C126.6,4.5,126.6,4.5,126.6,4.5z"></path><path class="st11" d="M130.7,10.6c-0.1,1.4-0.1,3.1-0.5,3.8c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.1l0,0
	c-0.2,0.2-0.5,0.1-1-0.2c-1.6-1.2-3.2-1.9-3.6-3.4c-0.4-1.5-0.9-4.8,0.1-6.2c0.7,1.5,2.1,3.1,3.2,3C129.9,8,130.7,10.6,130.7,10.6z"></path><path class="st12" d="M116.9,46c0,0,1.1-4.7,0.9-7c-0.2-2.4,0.9,5.7,0.8,6.2c-0.2,0.4,22.2-3,23.4-2.3
	C140.4,43.4,119.6,45.8,116.9,46L116.9,46L116.9,46z"></path><path class="st12" d="M142.9,42c0.2-0.5,0.9-3.8-0.6-5.6C142.5,37.8,142.9,42,142.9,42z"></path><g><path class="st5" d="M128.6,12.1c0.2,1.3,0.1,2.6-0.7,2.8c-0.9,0.2-2.1-0.7-2.4-2c-0.3-1.3,0.2-2.5,1.1-2.8
		C127.8,9.7,128.5,10.7,128.6,12.1L128.6,12.1L128.6,12.1z"></path><path class="st13" d="M126.2,11.8c0.3-0.4,1.8-1.1,1.6,1.4c0,0-0.4-0.7-0.6-0.5"></path></g><g><path class="st14" d="M170.9,35.5l-0.7-0.9l-2.3,2.3l1.9,2.6l0.8-0.8l-1.3-1.7L170.9,35.5z"></path><polygon class="st15" points="172.1,39.9 172.1,40 171.8,41.5 170.8,41.3 170.9,40.9 	"></polygon><polygon class="st14" points="173.5,33.1 172.1,39.9 170.9,40.9 170.9,40.8 170.9,40.8 172.4,32.9 	"></polygon><polygon class="st15" points="176.4,37.6 174.1,39.8 173.5,39.1 173.4,38.9 173.4,38.9 175.9,36.9 176.1,37.3 	"></polygon><polygon class="st14" points="173.4,38.9 174.9,37.4 173.6,35.7 174.4,34.9 175.9,36.9 	"></polygon></g></svg>`;
});
const YoutubeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: klass = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  return `<svg${add_attribute("class", klass, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"></path></svg>`;
});
const GithubIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: klass = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  return `<svg${add_attribute("class", klass, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>`;
});
const IconLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { target = "_self" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<a class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"${add_attribute("href", href, 0)}${add_attribute("target", target, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const SunIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: klass = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  return `<svg${add_attribute("class", klass, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="M 12 0 C 11.4 0 11 0.4 11 1 L 11 2 C 11 2.6 11.4 3 12 3 C 12.6 3 13 2.6 13 2 L 13 1 C 13 0.4 12.6 0 12 0 z M 4.1992188 3.1992188 C 3.9492188 3.1992187 3.7 3.3 3.5 3.5 C 3.1 3.9 3.1 4.5003906 3.5 4.9003906 L 4.1992188 5.5996094 C 4.5992187 5.9996094 5.1996094 5.9996094 5.5996094 5.5996094 C 5.9996094 5.1996094 5.9996094 4.5992188 5.5996094 4.1992188 L 4.9003906 3.5 C 4.7003906 3.3 4.4492188 3.1992188 4.1992188 3.1992188 z M 19.800781 3.1992188 C 19.550781 3.1992188 19.299609 3.3 19.099609 3.5 L 18.400391 4.1992188 C 18.000391 4.5992187 18.000391 5.1996094 18.400391 5.5996094 C 18.800391 5.9996094 19.400781 5.9996094 19.800781 5.5996094 L 20.5 4.9003906 C 20.9 4.5003906 20.9 3.9 20.5 3.5 C 20.3 3.3 20.050781 3.1992188 19.800781 3.1992188 z M 12 5 A 7 7 0 0 0 5 12 A 7 7 0 0 0 12 19 A 7 7 0 0 0 19 12 A 7 7 0 0 0 12 5 z M 1 11 C 0.4 11 0 11.4 0 12 C 0 12.6 0.4 13 1 13 L 2 13 C 2.6 13 3 12.6 3 12 C 3 11.4 2.6 11 2 11 L 1 11 z M 22 11 C 21.4 11 21 11.4 21 12 C 21 12.6 21.4 13 22 13 L 23 13 C 23.6 13 24 12.6 24 12 C 24 11.4 23.6 11 23 11 L 22 11 z M 4.9003906 18.099609 C 4.6503906 18.099609 4.3992188 18.200391 4.1992188 18.400391 L 3.5 19.099609 C 3.1 19.499609 3.1 20.1 3.5 20.5 C 3.9 20.9 4.5003906 20.9 4.9003906 20.5 L 5.5996094 19.800781 C 5.9996094 19.400781 5.9996094 18.800391 5.5996094 18.400391 C 5.3996094 18.200391 5.1503906 18.099609 4.9003906 18.099609 z M 19.099609 18.099609 C 18.849609 18.099609 18.600391 18.200391 18.400391 18.400391 C 18.000391 18.800391 18.000391 19.400781 18.400391 19.800781 L 19.099609 20.5 C 19.499609 20.9 20.1 20.9 20.5 20.5 C 20.9 20.1 20.9 19.499609 20.5 19.099609 L 19.800781 18.400391 C 19.600781 18.200391 19.349609 18.099609 19.099609 18.099609 z M 12 21 C 11.4 21 11 21.4 11 22 L 11 23 C 11 23.6 11.4 24 12 24 C 12.6 24 13 23.6 13 23 L 13 22 C 13 21.4 12.6 21 12 21 z"></path></svg>`;
});
const MoonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: klass = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  return `<svg${add_attribute("class", klass, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3.722 3.193L3.226 4.528c-.12.323-.375.578-.698.698L1.193 5.722c-.257.096-.257.46 0 .555l1.335.496c.323.12.578.375.698.698l.496 1.335c.096.257.46.257.555 0l.496-1.335c.12-.323.375-.578.698-.698l1.335-.496c.257-.096.257-.46 0-.555L5.472 5.226c-.323-.12-.578-.375-.698-.698L4.278 3.193C4.182 2.936 3.818 2.936 3.722 3.193zM20.916 12.994c.603.006 1.091.516 1.008 1.113-.232 1.662-.986 3.267-2.263 4.553-3.13 3.12-8.19 3.12-11.32 0-3.12-3.13-3.12-8.19 0-11.32 1.285-1.277 2.891-2.032 4.553-2.263C13.49 4.993 14 5.481 14.006 6.084c.017 1.765.7 3.521 2.044 4.866C17.394 12.294 19.151 12.977 20.916 12.994z"></path></svg>`;
});
const DarkmodeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkmode, $$unsubscribe_darkmode;
  $$unsubscribe_darkmode = subscribe(darkmode, (value) => $darkmode = value);
  $$unsubscribe_darkmode();
  return `<button class="p-2 text-purple-800 dark:text-yellow-200">${$darkmode ? `<div>${validate_component(SunIcon, "SunIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}</div>` : `<div>${validate_component(MoonIcon, "MoonIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}</div>`}</button>`;
});
const DiscordIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: klass = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  return `<svg${add_attribute("class", klass, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"></path></svg>`;
});
const TwitchIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: klass = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  return `<svg${add_attribute("class", klass, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"></path></svg>`;
});
const MainHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="fixed z-10 top-0 inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800"><nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24"><a href="/">${validate_component(Logo, "Logo").$$render($$result, { class: "w-28 h-28" }, {}, {})}</a> <div class="flex space-x-1 items-center">${validate_component(DarkmodeButton, "DarkmodeButton").$$render($$result, {}, {}, {})} <div class="flex space-x-1 items-center">${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      href: "https://discord.gg/83ZsKGaRVa",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `${validate_component(DiscordIcon, "DiscordIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}`;
      }
    }
  )}</div> <div class="flex space-x-1 items-center">${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      href: "https://www.youtube.com/@devjonatas",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `${validate_component(YoutubeIcon, "YoutubeIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}`;
      }
    }
  )} <div class="flex space-x-1 items-center">${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      href: "https://www.twitch.tv/devjonatas",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `${validate_component(TwitchIcon, "TwitchIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}`;
      }
    }
  )}</div> <div class="flex space-x-1 items-center">${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      href: "https://github.com/jonatasoli/",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `${validate_component(GithubIcon, "GithubIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}`;
      }
    }
  )}</div></div></div></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ThemeInitializer, "ThemeInitializer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainHeader, "MainHeader").$$render($$result, {}, {}, {})} <main class="pt-24 max-w-5xl mx-auto">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}`;
});
export {
  Layout as default
};
