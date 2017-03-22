import AWS from 'aws-sdk'
import config from '@/config/aws/config.json'
//  import config from '../../../config/aws/config.json'

AWS.config.update(config)
const realTimePredictionUrl = 'https://realtime.machinelearning.eu-west-1.amazonaws.com'
const machineLearning = new AWS.MachineLearning()

class AWSServices {

  constructor (MLModelId, record) {
    this.machineLearning = machineLearning
    this.realTimePredictionUrl = realTimePredictionUrl
    this.MLModelId = MLModelId
    this.record = record
  }

  binaryPredictionResult () {
    console.log(this.record)
    let params = {
      MLModelId: this.MLModelId,
      PredictEndpoint: this.realTimePredictionUrl,
      Record: this.record
    }
    this.machineLearning.predict(params, function (err, data) {
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

export default AWSServices
