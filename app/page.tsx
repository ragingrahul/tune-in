"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import {
  RuntimeConnector,
  Extension,
  WALLET
} from "@dataverse/runtime-connector";

// const runtimeConnector:RuntimeConnector=new RuntimeConnector(Extension)


export default function Home() {

  // const [wallet,setWallet]=useState<WALLET>()
  // const connectWallet=async()=>{
  //   try {
  //     const res=await runtimeConnector.connectWallet()
  //     setWallet(res.wallet)
  //     return res.address
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
    </main>
  )
}
