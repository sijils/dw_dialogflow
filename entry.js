exports.dialogflowFulfillment = function(req, res) {
    
    if (req.body.queryResult.intent.displayName == "dw_add") {
        var firstNum=req.body.queryResult.parameters.firstnumber;
        var secondNum=req.body.queryResult.parameters.secondnumber;

        var result=firstNum+secondNum

        return res.json({
            "fulfillmentText": "<speak>Addition result is " + result.toString()+"</speak>",
            "displayText": 'Addition result is '+ result.toString(),
            "source": 'na'
        });
      }
      

      if (req.body.queryResult.intent.displayName == "dw_subtract") {
        var firstNum=req.body.queryResult.parameters.firstnumber;
        var secondNum=req.body.queryResult.parameters.secondnumber;

        var result=firstNum-secondNum
        

        return res.json({
            "fulfillmentText": 'Subtraction result is '+ result.toString(),
            "displayText": 'Subtraction result is '+ result.toString(),
            "source": 'na'
        });
      }


      


    };
