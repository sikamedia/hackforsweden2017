var path = require('path')
var AWS = require('aws-sdk')

AWS.config.loadFromPath(path.resolve(__dirname, '../../config/aws/config.json'))
const realTimePredictionUrl = 'https://realtime.machinelearning.eu-west-1.amazonaws.com'
const machineLearning = new AWS.MachineLearning()

module.exports = {
  binaryPredictionResult : (MLModelId, record) => {
    console.log("haha")
    let params = {
      MLModelId: MLModelId,
      PredictEndpoint: realTimePredictionUrl,
      Record: record
    }
      machineLearning.predict(params, function (err, data) {
      if (err) {
        console.log(err, err.stack)  // an error occurred
        return err
      } else {
        console.log(data)  // successful response
        return data
      }
    })
  }
}
