import { Statistic } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'

export const Price = ({
  price,
  discountPercentage,
}: {
  price: number
  discountPercentage: number
}) => {
  return (
    <Statistic
      value={price}
      precision={2}
      valueStyle={{ color: discountPercentage > 15 ? '#cf1322' : '#3f8600' }}
      prefix={discountPercentage > 15 ? <ArrowDownOutlined /> : ''}
      suffix="$"
    />
  )
}
