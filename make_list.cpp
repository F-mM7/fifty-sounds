#include <bits/stdc++.h>
#include <boost/multiprecision/cpp_int.hpp>
#include <atcoder/all>
using namespace std;
using namespace atcoder;
using ll = long long;
using bint = boost::multiprecision::cpp_int;
using mint = modint998244353;
using pr = pair<int, int>;
ostream &operator<<(ostream &os, const mint &x)
{
    os << x.val();
    return os;
}
template <class T>
inline bool chmin(T &a, T b)
{
    if (a > b)
    {
        a = b;
        return true;
    }
    return false;
}
template <class T>
inline bool chmax(T &a, T b)
{
    if (a < b)
    {
        a = b;
        return true;
    }
    return false;
}
struct fast
{
    fast()
    {
        cin.tie(0);
        ios::sync_with_stdio(0);
    }
} fast;

int N = 31244;

int main()
{
    ifstream ifs("wordlist.txt");
    cin.rdbuf(ifs.rdbuf());

    ofstream out("list.js");

    vector<string> v;
    string s;
    for (int i = 0; i < N; ++i)
    {
        cin >> s;
        v.push_back(s);
    }

    N = v.size();
    out << "const list=[";
    for (int i = 0; i < N; ++i)
        out << '"' << v[i] << '"' << (i < N - 1 ? ",\r" : "\r];\r");

    cout << N << '\n';
}
