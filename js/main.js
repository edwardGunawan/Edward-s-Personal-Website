$(window).on('load',function(){

  /* initializing all the elments in the fornt_page.js */
  var location = $('#location').html();
  var p_aboutPage = $('.intro p').html();
  var table = $('#tableTemplate').html();
  var projectList = $('#listTemplate').html();
  console.log(table);


  /* All the content */
  var h5_frontPageLocation= {
    location:"San Diego, California",
  };

  var intro = {
    introduction: ' I\'m Edward Huang from UC San Diego. <br>\
     I love to exercise, travel, read books. <br>\
     and design and build, \
     clean and <br><span>well-crafted<span> software.'
  }

  var educationContent ={
    title:"Education",
    trs:[
      {key:'UC San Diego', year:' ', value:'B.S Computer Science'},
      {key:'Antic. <br>Graduation', year:' ', value:'December 2017'}
    ]
  };

  var industryContent = {
    title:"Industry",
    trs:[
      {key:'IBM', year:' <br>(Spring 2017)', value:'Software Engineer Intern'},
      {key:'Mesh.edu', year:' <br>(09/16 - 03/17)',value:'Software Developer'},
      {key:'Chen Lab <br>BioNanomaterials', year:' <br>(06/16 - 12/16)', value:'Software Developer'}
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
  renderTemplate(p_aboutPage,intro,'.intro p');
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
