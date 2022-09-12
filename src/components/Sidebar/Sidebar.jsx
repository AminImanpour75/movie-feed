import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { sidebarList } from "../../utils/constans";
function Sidebar() {
  const SidebarBox = styled(Box)({
    width: "250px",
    backgroundColor: "#353535",
    color: "#ccc",
    overflowX: "hidden",
    display: { xs: "none", md: "flex" },
  });

  const MenuBox = styled(Box)({
    display: "felx",
    flexDirection: "column",
    padding: "12px",
  });

  const styles = {
    ListButton: {
      ".icon": {
        color: "#ccc",
      },
      ".text": {
        fontSize: "14px",
        color: "#ccc",
        fontWeight: "700",
      },
      "&:hover": {
        ".icon": {
          color: "red",
        },
        ".text": {
          color: "#fff",
        },
      },
    },
  };

  const ListButton = styled(ListItemButton)(styles.ListButton);

  return (
    <SidebarBox>
      <Box sx={{ position: "fixed", top: "0", bottom: "0" }}>
        <MenuBox>
          <List
            sx={{ width: "100%", maxWidth: 360, color: "#ccc" }}
            component="div"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ backgroundColor: "#353535", color: "#ddd" }}
              >
                MENU
              </ListSubheader>
            }
          >
            {sidebarList.map((category, idx) => {
              return (
                <Link
                  key={idx}
                  to={category.path ? category.path : "/"}
                  style={{ textDecoration: "none" }}
                >
                  <ListButton>
                    <ListItemIcon className="icon">
                      {category.icon}
                    </ListItemIcon>

                    <ListItemText className="text">
                      {category.name}
                    </ListItemText>
                  </ListButton>
                </Link>
              );
            })}
          </List>
        </MenuBox>
      </Box>
    </SidebarBox>
  );
}

export default Sidebar;
