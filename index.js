'use strict'

module.exports = function (str)
{
  /*
  Replace the single-quotes with double quotes using replace function
  */
  return str.replace(/(?:\\*)?'([^'\\]*\\.)*[^']*'/g, function (match)
  {
    return match
            .replace(/\\'/g, '\'')  
            .replace(/([^\\])"/g, '$1\\\"')
            .replace(/^'|'$/g, '"');
  });
};
