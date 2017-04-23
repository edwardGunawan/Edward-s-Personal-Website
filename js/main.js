$(window).on('load',function(){

  /* initializing all the elments in the fornt_page.js */
  var location = $('#location').html();
  var p_aboutPage = $('#introduction p').html();
  var table = $('#tableTemplate').html();
  var projectList = $('#listTemplate').html();
  // console.log(table);


  /* All the content */
  var h5_frontPageLocation= {
    location:"San Diego, California",
  };

  var intro = {
    introduction: ' I\'m Edward Huang from UC San Diego.\
     I love to exercise, travel, read books.\
     and design and build, clean and\
     <span id="specialKeyword">wellCrafted</span> software.'
  }

  var educationContent ={
    title:"Education",
    trs:[
      {key:'UC San Diego', value:'B.S Computer Science'},
      {key:'Antic. Graduation', value:'December 2017'}
    ]
  };

  var industryContent = {
    title:"Industry",
    trs:[
      {key:'IBM', value:'Software Engineer Intern (Spring 17)'},
      {key:'Mesh.edu',value:'Software Developer (09/16 - 03/17)'},
      {key:'Chen Lab BioNanomaterials', value:'Software Developer (06/16 - 12/16)'}
    ]
  };

  var projectContent ={
    projects:[
      { link:'#', name:'Portfolio', img:'./image/Portfolio.jpg', class:'fade first-image-child'},
      { link:'#', name:'ReactTimerApp', img:'./image/ReactTimerApp.png', class:'fade last-two-image'},
      { link:'#', name:'TrackMe', img:'./image/TrackMeResize.png', class:'fade last-two-image'}
    ]
  };



  /* rendering the template */

  renderTemplate(location, h5_frontPageLocation,'#location');
  renderTemplate(p_aboutPage,intro,'#introduction p');
  renderTemplate(table,educationContent,'#tableEducation');
  renderTemplate(table,industryContent,'#tableIndustry');
  renderTemplate(projectList,projectContent,'.project-list');


  /* Welcome Page */





  /* Education */




  /* Industry */





  /* Project */










  function renderTemplate(elementToGet,  objContent, elementToRender){
    var compiled_template = Handlebars.compile(elementToGet);
    var content = objContent;
    var rendered = compiled_template(objContent);
    // console.log(rendered);
    $(elementToRender).html(rendered);
  }



});
