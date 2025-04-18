import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Home = () => {
    return (
        <div className="flex flex-col gap-y-10 items-center justify-center min-h-screen ">
            {/* <div className="flex items-center gap-x-4">
                <Button title="Primary" size="base" radius="full" />
                <Button variant="onPrimary" title="On Primary" size="base" radius="full" />
                <Button variant="outline" title="Outline" size="base" radius="full" />
                <Button variant="destructive" title="Destructive" size="base" radius="full" />
                <Button variant="onDestructive" title="On Destructive" size="base" radius="full" />
                <Button variant="ghost" title="Ghosted" size="base" radius="full" />
                <Button variant="disabled" title="Disabled" size="base" radius="full" />
                </div> */}

            <div className="w-[25rem]">
                <Input type="text" label="Email" placeholder="Enter your email" size="md" />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    size="md"
                />
            </div>
        </div>
    );
};

export default Home;
