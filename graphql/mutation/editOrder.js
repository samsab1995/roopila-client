import gql from 'graphql-tag'

export const editOrder = gql`
  mutation editOrder($id:String!,$itemName:String,$itemCount:String,$itemWeight:String,$itemVolume:String,$status:String,$inquiryAmount:Int,$finalAmount:Int){
    editOrder(id:$id,itemName:$itemName,itemCount:$itemCount,itemWeight:$itemWeight,itemVolume:$itemVolume,status:$status,inquiryAmount:$inquiryAmount,finalAmount:$finalAmount){
      id
      status
    }
  }
`
