window.onload= function(){

  /* initializing all the elments in the fornt_page.js */
  var location = $('#location').html();
  var h4_aboutPage = $('.intro h4').html();
  var table = $('#tableTemplate').html();
  var projectList = $('#listTemplate').html();
  console.log(table);


  /* All the content */
  var h5_frontPageLocation= {
    location:"San Diego, California",
  };

  var intro = {
    introduction: ' I\'m Edward Huang, an undergraduate students at UC San Diego. \
     I enjoy exercising, travelling, and reading books. I also enjoy designing and building, \
     clean and well-crafted software.'
  }

  var educationContent ={
    dls:[
      {key:'UC San Diego', year:' ', value:'B.S Computer Science'},
      {key:'Antic. Graduation', year:' ', value:'December 2017'}
    ]
  };

  var industryContent = {
    dls:[
      {key:'IBM', year:'Spring 2017', value:'Software Engineer Intern'},
      {key:'Mesh.edu', year:'(09/16-03/17)',value:'Software Developer'},
      {key:'Chen Lab BioNanomaterials', year:'(06/16 - 12/16)', value:'Software Developer'}
    ]
  };

  var projectContent ={
    projects:[
      { link:'#', name:'TrackMe', img:'src'},
      { link:'#', name:'Edward\'s Portfolio', img:'src'},
      { link:'#', name:'Gigz', img:'src'}
    ]
  };



  /* rendering the template */

  renderTemplate(location, h5_frontPageLocation,'#location');
  renderTemplate(h4_aboutPage,intro,'.intro h4');
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



}
