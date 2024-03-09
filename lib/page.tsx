"use client";

import { getRedirectResult, signInWithRedirect, signInWithCredential } from "firebase/auth";
import { auth} from "./lib/firebase/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }

      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          router.push("/");
        }
      });
    });
  }, []);

  function signIn() {
    signInWithCredential(auth, credential)
    //signInWithRedirect(auth, provider);
    console.log("HELLO ")
  }

  return (
    <>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

