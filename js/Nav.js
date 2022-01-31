export default function Nav() {
  const navItem1 = document.querySelector('[data-nav="startingpage"]');
  const navItem2 = document.querySelector('[data-nav="bookmarkspage"]');
  const navItem3 = document.querySelector('[data-nav="createpage"]');
  const navItem4 = document.querySelector('[data-nav="profilepage"]');
  const nav = document.querySelector('[data-js="nav-container"]');

  const loginbtn = document.querySelector('[data-js="loginbutton"]');
  const logoutbtn = document.querySelector('[data-js="logoutbutton"]');

  const loginPage = document.querySelector('[data-page="loginpage-top"]');
  const pageStart = document.querySelector('[data-page="startingpage"]');
  const pageBookmarks = document.querySelector('[data-page="bookmarkspage"]');
  const pageCreate = document.querySelector('[data-page="createpage"]');
  const pageProfile = document.querySelector('[data-page="profilepage"]');

  const allPages = document.querySelectorAll('[data-page]');
  const allNavItems = document.querySelectorAll('[data-nav]');

  loginbtn.addEventListener('click', () => {
    loginPage.classList.add('app-page--invisible');
    pageStart.classList.remove('app-page--invisible');
    navItem1.classList.add('nav-container__item--aktiv');
    nav.classList.remove('nav-container--invisible');
  });

  //Learning step 3 - short navigation with new Selectors//

  allNavItems.forEach(navItem => {
    navItem.addEventListener('click', event => {
      allPages.forEach(page => {
        page.classList.add('app-page--invisible');
      });
      allNavItems.forEach(navItem => {
        navItem.classList.remove('nav-container__item--aktiv');
      });
      const currentNavItem = event.currentTarget;
      console.log(currentNavItem);
      currentNavItem.classList.add('nav-container__item--aktiv');
      const currentNavItemAttribute = event.currentTarget.getAttribute('data-nav');
      console.log(currentNavItemAttribute);
      const currentPage = document.querySelector(`[data-page="${currentNavItemAttribute}"]`);
      currentPage.classList.remove('app-page--invisible');
    });
  });

  // ends here

  logoutbtn.addEventListener('click', () => {
    loginPage.classList.remove('app-page--invisible');
    navItem4.classList.remove('nav-container__item--aktiv');
    nav.classList.add('nav-container--invisible');
    pageProfile.classList.add('app-page--invisible');
  });
}

//Learning step 2 - navigation

// navItem1.addEventListener('click', () => {
//   allPages.forEach(page => {
//     page.classList.add('app-page--invisible');
//   });
//   pageStart.classList.remove('app-page--invisible');
//   allNavItems.forEach(navItem => {
//     navItem.classList.remove('nav-container__item--aktiv');
//   });
//   navItem1.classList.add('nav-container__item--aktiv');
// });

// navItem2.addEventListener('click', () => {
//   allPages.forEach(page => {
//     page.classList.add('app-page--invisible');
//   });
//   pageBookmarks.classList.remove('app-page--invisible');
//   allNavItems.forEach(navItem => {
//     navItem.classList.remove('nav-container__item--aktiv');
//   });
//   navItem2.classList.add('nav-container__item--aktiv');
// });

// navItem3.addEventListener('click', () => {
//   allPages.forEach(page => {
//     page.classList.add('app-page--invisible');
//   });
//   pageCreate.classList.remove('app-page--invisible');
//   allNavItems.forEach(navItem => {
//     navItem.classList.remove('nav-container__item--aktiv');
//   });
//   navItem3.classList.add('nav-container__item--aktiv');
// });

// navItem4.addEventListener('click', () => {
//   allPages.forEach(page => {
//     page.classList.add('app-page--invisible');
//   });
//   pageProfile.classList.remove('app-page--invisible');
//   allNavItems.forEach(navItem => {
//     navItem.classList.remove('nav-container__item--aktiv');
//   });
//   navItem4.classList.add('nav-container__item--aktiv');
// });

//Learning step 1 - navigation

// navItem1.addEventListener('click', () => {
//   navItem1.classList.add('nav-container__item--aktiv');
//   navItem2.classList.remove('nav-container__item--aktiv');
//   navItem3.classList.remove('nav-container__item--aktiv');
//   navItem4.classList.remove('nav-container__item--aktiv');
//   pageStart.classList.remove('app-page--invisible');
//   pageBookmarks.classList.add('app-page--invisible');
//   pageCreate.classList.add('app-page--invisible');
//   pageProfile.classList.add('app-page--invisible');
// });

// navItem2.addEventListener('click', () => {
//   navItem1.classList.remove('nav-container__item--aktiv');
//   navItem2.classList.add('nav-container__item--aktiv');
//   navItem3.classList.remove('nav-container__item--aktiv');
//   navItem4.classList.remove('nav-container__item--aktiv');
//   pageStart.classList.add('app-page--invisible');
//   pageBookmarks.classList.remove('app-page--invisible');
//   pageCreate.classList.add('app-page--invisible');
//   pageProfile.classList.add('app-page--invisible');
// });

// navItem3.addEventListener('click', () => {
//   navItem1.classList.remove('nav-container__item--aktiv');
//   navItem2.classList.remove('nav-container__item--aktiv');
//   navItem3.classList.add('nav-container__item--aktiv');
//   navItem4.classList.remove('nav-container__item--aktiv');
//   pageStart.classList.add('app-page--invisible');
//   pageBookmarks.classList.add('app-page--invisible');
//   pageCreate.classList.remove('app-page--invisible');
//   pageProfile.classList.add('app-page--invisible');
// });

// navItem4.addEventListener('click', () => {
//   navItem1.classList.remove('nav-container__item--aktiv');
//   navItem2.classList.remove('nav-container__item--aktiv');
//   navItem3.classList.remove('nav-container__item--aktiv');
//   navItem4.classList.add('nav-container__item--aktiv');
//   pageStart.classList.add('app-page--invisible');
//   pageBookmarks.classList.add('app-page--invisible');
//   pageCreate.classList.add('app-page--invisible');
//   pageProfile.classList.remove('app-page--invisible');
// });
