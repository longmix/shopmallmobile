/*+=======================================
 + 外卖JS购物车
 +=======================================*/

function remove(sid,goods){
    var res ={};
    for(a in goods){
        if(sid != a){
            res[a]=goods[a];
        }
    }
    return res;
}

window.ele = {
    addcart: function (shop_id, data) {
        with (window) {
            var goods;
            if (!cookies.isset('ele')) {
                data['num'] = 1;
                goods = {};
                //shop_id对应很多商品
                goods[shop_id] = [];
                goods[shop_id][0] = data;
                goods = cookies.stringify(goods);
                cookies.set('ele', goods);
            } else {
               
                goods = cookies.get('ele');
                goods = cookies.parse(goods);
                //遍历
                for (var sid in goods) {
                    if (sid != shop_id) {
                        goods = remove(sid,goods);
                    }
                }
                if(!goods[shop_id]){
                    data['num'] = 0;
                    goods = {};
                    //shop_id对应很多商品
                    goods[shop_id] = [];
                    goods[shop_id][0] = data;
                 
                }
                    
                
                var is_in = false, is_here = false;
                for (var sid in goods) {
                    if (sid == shop_id) {
                        //shop_id存在
                        is_in = true;
                        for (var index in goods[sid]) {
                            if (goods[sid][index]['product_id'] == data['product_id']) {
                                is_here = true;
                                break;
                            }
                        }
                        break;
                    } else {
                        layer.msg('一次只能订购一家的外卖，您可以清空购物车重新订餐！');
                        return false;
                    }
                }
                //该店存在
                if (is_in) {
                    //商品存在
                    if (is_here) {
                        if (window.ele.count() < 99) {
                            goods[shop_id][index]['num']++;
                        } else {
                            layer.msg('购物车商品数已经满99,不能再添加商品！');
                        }
                        goods = cookies.stringify(goods);
                        cookies.set('ele', goods);
                    } else {
                        data['num'] = 1;
                        goods[shop_id].push(data);
                        goods = cookies.stringify(goods);
                        cookies.set('ele', goods);
                    }
                } else {
                    data['num'] = 1;
                    goods[shop_id] = [];
                    goods[shop_id].push(data);
                    goods = cookies.stringify(goods);
                    cookies.set('ele', goods);
                }
            }
        }
    },
    getcart: function () {
        with (window) {
            if (!cookies.isset('ele')) {
                //购物车没商品
                return false;
            }
            var goods = cookies.get('ele');
            goods = cookies.parse(goods);
            return goods;
        }
    },
    inc: function (shop_id, product_id) {
        var goods = window.ele.getcart();
        if (!goods) {
            //这种情况暂时不会发生
            layer.msg('该商品不在购物车中,请重新添加');
        } else {
            //假设该商品存在
            for (var i in goods[shop_id]) {
                if (goods[shop_id][i]['product_id'] == product_id) {
                    if (window.ele.count() >= 99) {
                        layer.msg('购物车商品数已经满99,不能再添加商品！');
                    } else {
                        goods[shop_id][i]['num']++;
                        goods = window.cookies.stringify(goods);
                        window.cookies.set('ele', goods);
                    }
                    break;
                }
            }
        }
    },
    dec: function (shop_id, product_id) {
        var goods = window.ele.getcart();
        if (!goods) {
            //这种情况暂时不会发生
            layer.msg('该商品不在购物车中,请重新添加');
        } else {
            //假设该商品存在
            for (var i in goods[shop_id]) {
                if (goods[shop_id][i]['product_id'] == product_id) {
                    if (window.ele.itemcount(product_id) <= 0) {
                        return false;
                    } else {
                        goods[shop_id][i]['num']--;
                        goods = window.cookies.stringify(goods);
                        window.cookies.set('ele', goods);
                    }
                    break;
                }
            }
        }
    },
    count: function (shop_id) {
        var goods = window.ele.getcart();
        if (!goods) {
            return '0';
        } else {
            var num = 0;
            for (var i in goods) {
                if(i==shop_id){
                    for (var index in goods[i]) {
                        num += parseInt(goods[i][index]['num']);
                    }
                }
            }
            return num;
        }
    },
    itemcount: function (product_id) {
        var goods = window.ele.getcart();
        if (!goods) {
            return '0';
        } else {
            var num = 0;
            for (var i in goods) {
                for (var index in goods[i]) {
                    if (goods[i][index]['product_id'] == product_id) {
                        num = goods[i][index]['num'];
                    }
                }
            }
            return num;
        }
    },
    totalprice: function (shop_id) {
        var goods = window.ele.getcart();
        if (!goods) {
            return '0';
        } else {
            var num = 0;
            for (var i in goods) {
                if(i==shop_id){
                    for (var index in goods[i]) {
                        num += goods[i][index]['num'] * goods[i][index]['price'];
                    }
                }
            }
            return num.toFixed(2);
        }
    },
    removeby: function (product_id) {
        var goods = window.ele.getcart(), r = false;
        if (goods) {
            for (var i in goods) {
                for (var index in goods[i]) {
                    if (goods[i][index]['product_id'] == product_id) {
                        goods[i].splice(index, 1);
                        layer.msg(window.ele.count());
                        goods = window.cookies.stringify(goods);
                        window.cookies.set('ele', goods);
                        r = true;
                        break;
                    }
                }
            }
        }
        return r;
    }
}


/*+=======================================
 + 微店购物JS购物车
 +=======================================*/
window.mall = {
    addcart: function (shop_id, data) {
        window.shop_id = shop_id;
        with (window) {
            var goods;    
            if (!cookies.isset('mall')) {
                data['num'] = 1;
                goods = {};
                //shop_id对应很多商品
                goods[shop_id] = [];
                goods[shop_id][0] = data;
                goods = cookies.stringify(goods);
                cookies.set('mall', goods);
            } else {
                goods = cookies.get('mall');
                goods = cookies.parse(goods);
                //遍历
                var is_in = false, is_here = false;
                for (var sid in goods) {
                        if (sid == shop_id) {
                        //shop_id存在
                        is_in = true;
                        for (var index in goods[sid]) {
                            if (goods[sid][index]['goods_id'] == data['goods_id']) {
                                is_here = true;
                                break;
                            }
                        }
                        break;
                    } 

                }
                //该店存在
                if (is_in) {
                    //商品存在
                    if (is_here) {
                        if (window.mall.count() < 99) {
                            goods[shop_id][index]['num']++;
                        } else {
                            layer.msg('购物车商品数已经满99,不能再添加商品！');
                        }
                        goods = cookies.stringify(goods);
                        cookies.set('mall', goods);
                    } else {
                        data['num'] = 1;
                        goods[shop_id].push(data);
                        goods = cookies.stringify(goods);
                        cookies.set('mall', goods);
                    }
                } else {
                    data['num'] = 1;
                    goods[shop_id] = [];
                    goods[shop_id].push(data);
                    goods = cookies.stringify(goods);
                    cookies.set('mall', goods);
                }
            }
        }
    },
    getcart: function () {
        with (window) {
            if (!cookies.isset('mall')) {
                //购物车没商品
                return false;
            }
            var goods = cookies.get('mall');
            goods = cookies.parse(goods);
            return goods;
        }
    },
    inc: function (shop_id, goods_id) {
        var goods = window.mall.getcart();
        if (!goods) {
            //这种情况暂时不会发生
            layer.msg('该商品不在购物车中,请重新添加');
        } else {
            //假设该商品存在
            for (var i in goods[shop_id]) {
                if (goods[shop_id][i]['goods_id'] == goods_id) {
                    if (window.mall.count() >= 99) {
                        layer.msg('购物车商品数已经满99,不能再添加商品！');
                    } else {
                        goods[shop_id][i]['num']++;
                        goods = window.cookies.stringify(goods);
                        window.cookies.set('mall', goods);
                    }
                    break;
                }
            }
        }
    },
    dec: function (shop_id, goods_id) {
        var goods = window.mall.getcart();
        if (!goods) {
            //这种情况暂时不会发生
            layer.msg('该商品不在购物车中,请重新添加');
        } else {
            //假设该商品存在
            for (var i in goods[shop_id]) {
                if (goods[shop_id][i]['goods_id'] == goods_id) {
                    if (window.mall.itemcount(goods_id) <= 0) {
                        return false;
                    } else {
                        goods[shop_id][i]['num']--;
                        goods = window.cookies.stringify(goods);
                        window.cookies.set('mall', goods);
                    }
                    break;
                }
            }
        }
    },
    count: function (shop_id) {
        var goods = window.mall.getcart();
        if (!goods) {
            return '0';
        } else {
            var num = 0;
            for (var i in goods) {
                if(i == shop_id){
                    for (var index in goods[i]) {
                        num += parseInt(goods[i][index]['num']);
                    }
                }
            }
            return num;
        }
    },
    itemcount: function (goods_id) {
        var goods = window.mall.getcart();
        if (!goods) {
            return '0';
        } else {
            var num = 0;
            for (var i in goods) {
                for (var index in goods[i]) {
                    if (goods[i][index]['goods_id'] == goods_id) {
                        num = goods[i][index]['num'];
                    }
                }
            }
            return num;
        }
    },
    totalprice: function (shop_id) {
        var goods = window.mall.getcart();
        if (!goods) {
            return '0';
        } else {
            var num = 0;
            for (var i in goods) {
                if(i == shop_id){
                    for (var index in goods[i]) {
                        num += goods[i][index]['num'] * goods[i][index]['price'];
                    }
                }
            }
            return num;
        }
    },
    removeby: function (goods_id) {
        var goods = window.mall.getcart(), r = false;
        if (goods) {
            for (var i in goods) {
                for (var index in goods[i]) {
                    if (goods[i][index]['goods_id'] == goods_id) {
                        goods[i].splice(index, 1);
                        goods = window.cookies.stringify(goods);
                        window.cookies.set('mall', goods);
                        r = true;
                        break;
                    }
                }
            }
        }
        return r;
    }
}
