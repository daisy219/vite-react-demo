import React, { useEffect } from 'react';
import { Button } from 'antd';
import { get } from '../../utils';

export default function Index() {
  console.log(import.meta.env)
  function add(x, y, z) {
    return 100 * x + 10 * y + z;
  }
  let add1 = add.bind(null, 1, 2);
  useEffect(() => {
    get('/index-infos').then(() => {
      console.log(add1(4))
    })
  }, [])

  return (
    <div>
      <Button type='primary'>Inde11x</Button>
    </div>
  )
}