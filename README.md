flowSchema =  {
  //first:
  _id: 'string',
  parentId: 'string', //KEEP?
  childId: 'string',  //KEEP?
  type: 'string', //Default 'html', but could be a color?, number? 
  val: 'string',
  title: 'string',
  //second:
  tags: 'array',
}

tagSchema = {
  _id: 'string',
  name: 'string',
  //nested tags?
}

//Aggregate?
relations = 
{
  _id: 'string',
  parentId: 'string',
  childId: 'string',
}

