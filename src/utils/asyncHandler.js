// TYPE - 1 ( TRY-CATCH )
// const asyncHandler = (fn) => async {()=>{}}
// fxn me fxn ( Higher order fxn )

// const asyncHandler = (fn)=> async (req, res, next)=>{
//     try{
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
//     }
// }

// TYPE - 2 ( PROMISES )

const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}




export default asyncHandler

