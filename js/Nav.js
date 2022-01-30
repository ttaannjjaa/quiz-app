export default function Nav() {
  const navItem1 = document.querySelector('[data-js="navlistitem1"]');
  const navItem2 = document.querySelector('[data-js="navlistitem2"]');
  const navItem3 = document.querySelector('[data-js="navlistitem3"]');
  const navItem4 = document.querySelector('[data-js="navlistitem4"]');
  const nav = document.querySelector('[data-js="nav-container"]');

  const loginbtn = document.querySelector('[data-js="loginbutton"]');
  const logoutbtn = document.querySelector('[data-js="logoutbutton"]');

  const loginPage = document.querySelector('[data-js="loginpage-top"]');
  const pageStart = document.querySelector('[data-js="startingpage-top"]');
  const pageBookmarks = document.querySelector('[data-js="bookmarkspage-top"]');
  const pageCreate = document.querySelector('[data-js="createpage-top"]');
  const pageProfile = document.querySelector('[data-js="profilepage-top"]');

  loginbtn.addEventListener('click', () => {
    loginPage.classList.add('app-page--invisible');
    pageStart.classList.remove('app-page--invisible');
    navItem1.classList.add('nav-container__item--aktiv');
    nav.classList.remove('nav-container--invisible');
  });

  navItem1.addEventListener('click', () => {
    navItem1.classList.add('nav-container__item--aktiv');
    navItem2.classList.remove('nav-container__item--aktiv');
    navItem3.classList.remove('nav-container__item--aktiv');
    navItem4.classList.remove('nav-container__item--aktiv');
    pageStart.classList.remove('app-page--invisible');
    pageBookmarks.classList.add('app-page--invisible');
    pageCreate.classList.add('app-page--invisible');
    pageProfile.classList.add('app-page--invisible');
  });

  navItem2.addEventListener('click', () => {
    navItem1.classList.remove('nav-container__item--aktiv');
    navItem2.classList.add('nav-container__item--aktiv');
    navItem3.classList.remove('nav-container__item--aktiv');
    navItem4.classList.remove('nav-container__item--aktiv');
    pageStart.classList.add('app-page--invisible');
    pageBookmarks.classList.remove('app-page--invisible');
    pageCreate.classList.add('app-page--invisible');
    pageProfile.classList.add('app-page--invisible');
  });

  navItem3.addEventListener('click', () => {
    navItem1.classList.remove('nav-container__item--aktiv');
    navItem2.classList.remove('nav-container__item--aktiv');
    navItem3.classList.add('nav-container__item--aktiv');
    navItem4.classList.remove('nav-container__item--aktiv');
    pageStart.classList.add('app-page--invisible');
    pageBookmarks.classList.add('app-page--invisible');
    pageCreate.classList.remove('app-page--invisible');
    pageProfile.classList.add('app-page--invisible');
  });

  navItem4.addEventListener('click', () => {
    navItem1.classList.remove('nav-container__item--aktiv');
    navItem2.classList.remove('nav-container__item--aktiv');
    navItem3.classList.remove('nav-container__item--aktiv');
    navItem4.classList.add('nav-container__item--aktiv');
    pageStart.classList.add('app-page--invisible');
    pageBookmarks.classList.add('app-page--invisible');
    pageCreate.classList.add('app-page--invisible');
    pageProfile.classList.remove('app-page--invisible');
  });

  logoutbtn.addEventListener('click', () => {
    loginPage.classList.remove('app-page--invisible');
    navItem4.classList.remove('nav-container__item--aktiv');
    nav.classList.add('nav-container--invisible');
    pageProfile.classList.add('app-page--invisible');
  });
}
