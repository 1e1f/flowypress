function getFlowContent(domId, flowId){
  jQuery.get('http://localhost:3000/v1/flow-id/' + flowId, function(data){
    if(!data.val) console.warn('No Flow Value Received');
    document.getElementById(domId).innerHTML = data.val;

  }).fail(function() {
    console.warn('Error in http request for flow data.');
  });
}
getFlowContent('beard', 'ChmXfGGkZePxTPBd6');
