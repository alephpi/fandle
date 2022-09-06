import json
import pandas as pd
with open('./总成语表.json', 'r', encoding='utf-8') as file:
    dict_total = json.load(file)

dict_py_freq_per_idiom = {}
for (idiom, phones) in dict_total.items():
    phone_set = set(phones.split(' '))
    for phone in phone_set:
        if not phone in dict_py_freq_per_idiom.keys():
            dict_py_freq_per_idiom[phone] = {'freq': 1, 'examples': [idiom]}
        else:
            dict_py_freq_per_idiom[phone]['freq'] += 1
            dict_py_freq_per_idiom[phone]['examples'].append(idiom)

df_py_freq_per_idiom = pd.DataFrame.from_dict(
    dict_py_freq_per_idiom, orient='index')
df_py_sort_per_idiom = df_py_freq_per_idiom.sort_values(by='freq')
dict_py_sort_per_idiom = pd.DataFrame.to_dict(
    df_py_sort_per_idiom, orient='index')
with open('./py_freq_per_idiom.json', 'w', encoding='utf-8') as outfile:
    json.dump(dict_py_sort_per_idiom, outfile, ensure_ascii=False, indent=0)

print('py_freq_per_idiom.json updated')
