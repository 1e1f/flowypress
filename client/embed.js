var startEmbedCode =  "<script> function getFlowContent(domId, flowId){ jQuery.get('" + __meteor_runtime_config__.ROOT_URL 
    + "v1/flow-id/' + flowId, function(data){ if(!data.val) console.warn('No Flow Value Received'); document.getElementById(domId).innerHTML = data.val;  }).fail(function() { console.warn('Error in http request for flow data.');});}";

var endEmbedCode = function(flowId){
  return "getFlowContent('" + flowId  + "', '" + flowId + "' ); </script>";
}

getEmbedCode = function(flowId, type){
  return {
    script: startEmbedCode + endEmbedCode(flowId),
    element: "<div id='" + flowId + "'></div>"
  };
}



