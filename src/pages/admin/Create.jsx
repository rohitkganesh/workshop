import axios from "axios";
import React from "react";

const Create = () => {
    const createBlog = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        let formData = {
            name: data.get("name"),
            avatar: data.get("avatar"),
            desc: data.get("desc"),
        };
        let res = await axios.post(
            "http://localhost:4000/add/",
            formData
        );
        console.log(res);
        if (res.status === 201) {
            alert("created blog successfully");
        }
    };
    return (
        <div>
            <p style={{ color: 'white', background: 'black', width: 'fit-content', padding: '10px 25px' }}>Create Blog</p>
            <form onSubmit={createBlog}>
                <input type="text" name="name" placeholder="NAME" />
                <input type="text" name="avatar" placeholder="AVATAR" />
                <input type="text" name="desc" placeholder="DESCRIPTION" />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default Create;