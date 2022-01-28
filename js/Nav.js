export default function Nav() {
  const navItem1 = document.querySelector('[data-js="navlistitem1"]');
  const navItem2 = document.querySelector('[data-js="navlistitem2"]');
  const navItem3 = document.querySelector('[data-js="navlistitem3"]');
  const navItem4 = document.querySelector('[data-js="navlistitem4"]');
  const pageStart = document.querySelector('[data-js="startingpage-top"]');
  const pageBookmarks = document.querySelector('[data-js="bookmarkspage-top"]');
  const pageCreate = document.querySelector('[data-js="createpage-top"]');
  const pageProfile = document.querySelector('[data-js="profilepage-top"]');

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
    pageBookmarks.classList.add('page--invisible');
    pageCreate.classList.add('app-page--invisible');
    pageProfile.classList.remove('app-page--invisible');
  });
}
