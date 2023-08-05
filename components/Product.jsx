const ProductCard = ({ product }) => {
    return (
      <View style={styles.card}>
        <Image source={product.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    );
  };
export default ProductCard;  