import {Request,Response} from 'express'
const authLogoutController = (req:Request, res:Response) => {
  req.logOut({ keepSessionInfo: false }, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({logOut:false});
    } 

     res.clearCookie;
      req.session.passport = null;
     delete req.session.user;
     req.session.destroy(function (err) {
       if (err) {
         console.error(err);
         return res.status(500).json({ logOut: false });
       }

       return res.json({ logOut: true });
     });
  });
}

export default authLogoutController
