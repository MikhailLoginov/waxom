function industrySelection() {
  const all = [0, 1, 2, 3, 4, 5],
    webDesign = [1, 4, 5],
    mobileApp = [0],
    illustration = [2, 3],
    photography = [0, 2, 3, 5];

  let industryName = all;

  function setActiveIndustry() {
    Array.from(document.getElementsByClassName("projects__industry")).forEach((industry, number) => {
      industry.addEventListener('click', () => {
        Array.from(document.getElementsByClassName("projects__industry")).forEach((industry) => {
          industry.className = "projects__industry";
        });
        industry.className += ' active';
        switch (number) {
          case 0:
            industryName = all;
            break;
          case 1:
            industryName = webDesign;
            break;
          case 2:
            industryName = mobileApp;
            break;
          case 3:
            industryName = illustration;
            break;
          case 4:
            industryName = photography;
            break;
        };
        displayProjects(industryName);
        console.log(number);
        console.log(industryName);
      })
    })
  }

  setActiveIndustry();

  function displayProjects(industryName) {
    Array.from(document.getElementsByClassName("project")).forEach((project, number) => {
      if (industryName.indexOf(number) == -1) {
        project.style.display = 'none';
      } else {
        project.style.display = 'flex';
      }
    })
  }

}

$(document).ready(function () {
  industrySelection();
});
