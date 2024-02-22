import { Component, HostListener,  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(private router: Router) {}

  showScrollToTopButton :boolean= false;

  showDropdown: boolean = false;
  imgSrc:string="https://static.wixstatic.com/media/c4b02c_1ae8a71716c7493fbb19dc449b6ef37c~mv2.png/v1/fill/w_188,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Harz%20White.png"

  scrollToSection(event: any, sectionId: string): void {
    const section = document.getElementById(sectionId);
    const currentRoute = this.router.url;

    if (section) {
        // Check if the target section is already active
        const isActive = currentRoute.includes(sectionId);

        // If the target section is already active, scroll back to the top of it
        if (isActive) {
            window.scrollTo({ top: ((section.getBoundingClientRect().top + window.scrollY) - 90), behavior: "smooth" });
        } else {
            // If the target section is not active, navigate to it
            document.querySelectorAll(".tabs a").forEach((elem) => {
                elem.classList.remove("active");
            });
            event.target.classList.add("active");
            window.scrollTo({ top: ((section.getBoundingClientRect().top + window.scrollY) - 90), behavior: "smooth" });
        }
    }
}

  scrollToSectionSmall(event: any, sectionId: string): void {

    const section = document.getElementById(sectionId);

    if (section) {
      document.querySelectorAll("#nav2 .nav-mobile a").forEach((elem) => {
        elem.classList.remove("active-mobile");
      })
      event.target.classList.add("active-mobile");
      this.hideSmallNavList()
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  hideSmallNavList(): void {
    const navList = document.querySelector("#nav2 .nav-mobile");
    if (navList) {
      navList.classList.replace("d-block", "d-none");
    }
  }

  displaySmallNavList(): void {
    const navList = document.querySelector("#nav2 .nav-mobile");

    if (navList) {
      navList.classList.replace("d-none", "d-block");
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sectionElement = document.getElementById('nav2');
    if (sectionElement) {
      if (window.pageYOffset < 10) {
        sectionElement.style.cssText = "background:  #105065;; padding: 20px 0px;"
      }
      else {
        sectionElement.style.cssText = "background:  #105065;; padding: 12px 0px;"
      }
    }
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    this.showScrollToTopButton = false;
  }
}


