import React from 'react'
import CommonFavorites from '../../Components/Common/CommonFavorites'
import { useEffect, useState } from "react";

function Favourites() {
  return (
      <CommonFavorites serviceDetailTo="/provider/dealDetails"/>
  )
}

export default Favourites
