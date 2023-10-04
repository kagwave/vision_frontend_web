export default function MountDisplay(iconUrl: string | undefined | boolean, pageTitle: string | undefined, location?: string) {

  let link: any = document.querySelector("link[rel='icon']")!

  if (iconUrl === undefined && link) {
    link!.href = "favicon.ico";
  } else {
    link!.href = iconUrl;   
  }

  if (pageTitle === undefined) {
    document.title = "NCSU Microservice";
  } else if (location === undefined){
    document.title = pageTitle + " | NCSU";
  } else {
    document.title = pageTitle;
  }

  if (location === undefined) {
    document.body.style.overflow = 'auto';
    if (document.querySelector('.header-bar') !== null) {
      var header: any = document.querySelector('.header-bar');
      var navbar: any = document.querySelector('.navbar');
      var body = document.getElementById('page-content');
      var footer = document.getElementById("footer-container");
      if (header) header!.style.display = 'flex';
      if (navbar) navbar!.style.display = 'flex';
      if (body) body.classList.remove("blur-effect");
      if (header) header.classList.remove("blur-effect");
      if (footer) footer.classList.remove("blur-effect");
    }
  }
    
}