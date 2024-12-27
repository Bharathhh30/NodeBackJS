import express from 'express';
import { handleGetAllUsers } from '../controllers/user';

const router = express.Router();

router.get('/',handleGetAllUsers,async(req,res)=>{
    const allDbUsers = await User.find({});
    const html = `
        <ul>
            ${allDbUsers.map((user)=> `<li>${user.firstName} - ${user.email}</li>`)}
        </ul>
    `
    res.send(html)
})

// Routes REST API
router.get('/api/users',async(req,res)=>{
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
})

router.get('/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id)
    return res.json(user);
})


router.post('/' ,async(req,res)=>{
    const body = req.body;
    // console.log(body);
    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        jobTitle : body.jobTitle,
        gender :   body.gender,
    })
    return res.status(201).json({message:"Success"});
    
})

router.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const { last_name } = req.body;

    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ status: "user not found" });

    user.last_name = last_name;

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "error updating file" });
        }
        res.json({ status: "successfully updated", updated_last_name: last_name });
    });
});

router.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // Extract the user ID from the route
  
    // Step 1: Read the JSON file
    const fileData = fs.readFileSync('./MOCK_DATA.json', 'utf8');
    const users = JSON.parse(fileData);
  
    // Step 2: Find the index of the user by ID
    const userIndex = users.findIndex((u) => u.id === userId);
  
    if (userIndex === -1) {
      return res.status(404).json({
        status: 'Error',
        message: 'User not found',
      });
    }
  
    // Step 3: Remove the user from the array
    const deletedUser = users.splice(userIndex, 1);
  
    // Step 4: Write the updated array back to the JSON file
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 2), 'utf8');
  
    // Step 5: Respond to the client with the deleted user
    res.json({
      status: 'successfully deleted',
      deletedUser: deletedUser[0], // Return the deleted user's details
    });
  });