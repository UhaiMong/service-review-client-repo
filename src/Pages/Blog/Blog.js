import React from 'react';

const Blog = () => {
    const blogs = [
        { no: 1, question: "What is the difference between SQL and NoSQL?", ans: "Ans: SQL databases are table-based and NoSQL databases are either key-value pairs, document-based.SQL databases defines and manipulates data based structured query language (SQL) and NoSQL database has dynamic schema for unstructured data."},
        { no: 2, question: "What is JWT and how does it work?", ans: "Ans: JWT is stand for JavaScript Web Token.It keeps secure Signin/verification. Client logs in with his/her credentials. Server generates a Jwt token at server side. After token generation, the server returns a token in response."},
        { no: 3, question: "What is the difference between JavaScript and NodeJs?", ans: "Ans: JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all."},
        { no: 4, question: "How does nodeJs handle multiple request at the same time?", ans: "NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them"},
    ]
    const open = <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    </>
    const close = <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    </>
    return (
        <div
            className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white"
        >
            
            {
                blogs.map(blog => <details
                    key={blog.no}
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            {blog.question}
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            {open}
                            {close}
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        {blog.ans}
                    </p>
                </details>)
            }
        </div>

    );
};

export default Blog;