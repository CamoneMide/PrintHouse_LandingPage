const menuLite = document.querySelector('.menuLite');
const btn = document.querySelector('.mBtns');
const abtLite = document.querySelector('.abtLite');
const about = document.querySelector('.abtS');
const searchLite = document.querySelector('.searchLite');
const search1 = document.querySelector('.magshow1');
const search2 = document.querySelector('.magshow2');
const loginLite = document.querySelector('.loginLite');
const login1 = document.querySelector('.hicon21');
const login2 = document.querySelector('.hicon22');
const apds = document.querySelectorAll('.apd')
const apd1 = document.querySelector('.apd1')
const apd2 = document.querySelector('.apd2')
const apd3 = document.querySelector('.apd3')
const apd4 = document.querySelector('.apd4')



btn.addEventListener('click', () =>{
    menuLite.classList.toggle('active')
});
about.addEventListener('click', () =>{
    abtLite.classList.toggle('bactive')
});
search1.addEventListener('click', () =>{
    searchLite.classList.toggle('sactive')
});
search2.addEventListener('click', () =>{
    searchLite.classList.toggle('sactive')
});
login1.addEventListener('click', () =>{
    loginLite.classList.toggle('lactive')
});
login2.addEventListener('click', () =>{
    loginLite.classList.toggle('lactive')
});
window.addEventListener('scroll', () =>{
    menuLite.classList.remove('active')
    abtLite.classList.remove('bactive')
    searchLite.classList.remove('sactive')
    loginLite.classList.remove('lactive')
  });

apds.forEach(apd => {
  apd1.addEventListener('click', () =>{
    // apd.classList.toggle('apdl')
    if (apd.classList.contains('apdl')) {
        apd.classList.remove('apdl')
    }else{
        apd1.classList.add('apdl')
        apd2.classList.remove('apdl')
        apd3.classList.remove('apdl')
        apd4.classList.remove('apdl')
    }
  })
});

apds.forEach(apd => {
    apd2.addEventListener('click', () =>{
      // apd.classList.toggle('apdl')
      if (apd.classList.contains('apdl')) {
          apd.classList.remove('apdl')
      }else{
        apd2.classList.add('apdl')
        apd1.classList.remove('apdl')
        apd3.classList.remove('apdl')
        apd4.classList.remove('apdl')
      }
    })
  });

  apds.forEach(apd => {
    apd3.addEventListener('click', () =>{
      // apd.classList.toggle('apdl')
      if (apd.classList.contains('apdl')) {
          apd.classList.remove('apdl')
      }else{
        apd3.classList.add('apdl')
        apd2.classList.remove('apdl')
        apd1.classList.remove('apdl')
        apd4.classList.remove('apdl')
      }
    })
  });

  apds.forEach(apd => {
    apd4.addEventListener('click', () =>{
      // apd.classList.toggle('apdl')
      if (apd.classList.contains('apdl')) {
        //   apd.classList.remove('apdl')
      }else{
        apd4.classList.add('apdl')
        apd2.classList.remove('apdl')
        apd3.classList.remove('apdl')
        apd1.classList.remove('apdl')
      }
    })
  });