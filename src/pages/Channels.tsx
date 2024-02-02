import MembersListItem from "../components/MembersListItem";
import MembersListHeader from "../components/MembersListHeader";
import IconButton from "../components/button/IconButton";
import { LucideMail, LucidePlus, LucideLogOut, LucideSend } from "lucide-react";
import MessagesHeader from "../components/MessagesHeader";
import MessageInput from "../components/input/MessageInput";

interface ChannelsProps {
}

const channels = [
    {
        id: 1,
        name: "general",
        description: "general discussion",
    },
    {
        id: 2,
        name: "random",
        description: "random discussion",
    },
    {
        id: 3,
        name: "random",
        description: "random discussion",
    },
    {
        id: 4,
        name: "random",
        description: "random discussion",
    },
    {
        id: 5,
        name: "random",
        description: "random discussion",
    },
    {
        id: 6,
        name: "random",
        description: "random discussion",
    },
    {
        id: 7,
        name: "random",
        description: "random discussion",
    },
];

const members = [
    {
        id: 1,
        name: "John Doe",
        isConnected: true,
        image: ""
    },
    {
        id: 2,
        name: "John Doe",
        isConnected: false,
        image: ""
    },
    {
        id: 3,
        name: "John Doe",
        isConnected: true,
        image: ""
    },
    {
        id: 4,
        name: "John Doe",
        isConnected: true,
        image: ""
    }
];

const actualChannel = {
    id: 1,
    name: "General",
    description: "general discussion",
};

export default function Channels(props: ChannelsProps) {
    return (
        <div className="flex flex-row bg-violet-500">
            <div className="bg-violet-200 p-6">
                <MessagesHeader channel={actualChannel.name} />
                <div className="flex flex-col gap-3 font-medium">
                    <p>Rapidement is typing...</p>
                    <div className="flex flex-row gap-6">
                        <MessageInput />
                        <IconButton onClick={() => {}}>
                            <LucideSend />
                        </IconButton>
                        <IconButton onClick={() => {}}>
                            <LucidePlus />
                        </IconButton>
                    </div>
                </div>
            </div>

            <div className="bg-violet-300 p-6 rounded-r-3xl flex flex-col gap-2">
                <MembersListHeader />
                <div className="flex flex-col gap-1">
                {members.map((member) => (
                <MembersListItem key={member.id} name={member.name} isConnected={member.isConnected} image={member.image}/>
                    ))}
                </div>
            </div>

            <div className="bg-violet-500 flex flex-col w-min h-screen p-6 ">
                <div className="pb-12">
                    <IconButton onClick={() => {}}>
                        <LucideMail />
                    </IconButton>
                </div>
                <div className="flex flex-col gap-6 flex-grow overflow-y-scroll no-scrollbar scroll-smooth">
                    {channels.map((channel) => (
                        <IconButton key={channel.id} onClick={() => {}} />
                    ))}
                    <IconButton onClick={() => {}}>
                        <LucidePlus />
                    </IconButton>
                </div>
                <div className="pt-12">
                    <IconButton onClick={() => {}}>
                        <LucideLogOut />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}