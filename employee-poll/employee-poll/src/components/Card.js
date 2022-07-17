// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import {Link} from "react-router-dom";
// import {connect} from "react-redux"
// import Poll from './Poll'

// const MediaCard =({question, author}) =>{
//   return (
//     <>
//       <Link to={'questions/' + question.id}></Link>
//       <div className="m-3 p-2 rounded-xl shadow-md hover:shadow-xl transition bg-zinc-300 max-w-sm mx-auto flex items-center space-x-4">
//     <Card sx={{ maxWidth: 450 }}>
//       <CardMedia
//         component="img"
//         height="5"                
//       />
//        <div className="shrink-0">
//                 <img className="h-12 w-12" src={author?.avatarURL} alt="Author" />
//             </div>
//       <CardContent>
      
//                 <div className="text-xl font-medium text-black">{question.author}</div>
//         <Typography gutterBottom variant="h5" component="div">
//          {question.author}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         {new Date(question.timestamp).toDateString()}
//         </Typography>
//       </CardContent>
      
      
//       <CardActions>
//         <Button size="large" >Show</Button>
     
//       </CardActions>
//     </Card>
//     </div>
//     </>
//   );
// }
// export default connect()(MediaCard);


import {connect} from "react-redux";
import {Link} from "react-router-dom";

const MediaCard = ({question, author}) => {
    return (
        <Link to={'questions/' + question.id}>
        <div className="m-3 p-2 rounded-xl shadow-md hover:shadow-xl transition bg-zinc-300 max-w-sm mx-auto flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src={author?.avatarURL} alt="Author" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">{question.author}</div>
                <p className="text-xs italic">{new Date(question.timestamp).toDateString()}</p>
                <p className="underline underline-offset-4">Show</p>
            </div>
        </div>
        </Link>
    );
}

export default connect()(MediaCard);


/*
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
 */
