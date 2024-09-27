import { Box, Typography, Button, Stack } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { EmojiPizza } from "../assets";
import MenuCard from "../components/MenuCard";
import OrdersCard from "../components/OrdersCard";
import RoleCard from "../components/RoleCard";
import UserCard from "../components/UserCard";

function Dashboard() {
  return (
    <Box>
      {/* sidebar */}
      <Box>
        <Box>
          <Typography>PIZZA</Typography>
          <NotesIcon />
        </Box>

        <Box>
          <img src={EmojiPizza} alt="pizza" />
        </Box>

        <Box>
          <Stack>
            <Box>
              <Typography>Orders</Typography>
            </Box>
            <Box>
              <Typography>Add Menu</Typography>
            </Box>
            <Box>
              <Typography>Role</Typography>
            </Box>
            <Box>
              <Typography>User</Typography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Box>
            <LogoutIcon />
            <Typography>Logout</Typography>
          </Box>
        </Box>
      </Box>

      {/* main content */}

      <Box>
        <Box>
          <Typography>Orders</Typography>
          <Box>
            <NotificationsIcon />
            <AccountCircleIcon />
          </Box>
        </Box>

        <Box>
          <MenuCard />
          <OrdersCard />
          <RoleCard />
          <UserCard />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
