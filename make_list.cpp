#include <bits/stdc++.h>
using namespace std;
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

    out << "const list=[";
    for (int i = 0; i < N; ++i)
        out << '"' << v[i] << '"' << (i < N - 1 ? ",\r" : "\r];\r");

    cout << "done\n";
}
