import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
    "&:hover": {
      cursor: "pointer",
    }
	},
}));

type Props = {
	avatarSource?: string
}

export default function BadgeAvatars({ avatarSource }: Props) {
	return (
		<Stack direction="row" spacing={2}>
			<StyledBadge
				overlap="circular"
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				variant="dot"
        onClick={(e) => {alert('Clicked')}}
			>
				<Avatar alt="Mahrus" src="" />
			</StyledBadge>
		</Stack>
	);
}
