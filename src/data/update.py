import json
import pandas as pd


def update_dict(path, name):

    with open(path, 'r', encoding='utf-8') as file:
        dict_total = json.load(file)

    dict_py_freq_per_idiom = {}
    for (idiom, phones) in dict_total.items():
        phone_set = set(phones.split(' '))
        for phone in phone_set:
            if not phone in dict_py_freq_per_idiom.keys():
                dict_py_freq_per_idiom[phone] = {
                    'freq': 1, 'examples': [idiom]}
            else:
                dict_py_freq_per_idiom[phone]['freq'] += 1
                dict_py_freq_per_idiom[phone]['examples'].append(idiom)

    df_py_freq_per_idiom = pd.DataFrame.from_dict(
        dict_py_freq_per_idiom, orient='index')
    df_py_sort_per_idiom = df_py_freq_per_idiom.sort_values(by='freq')
    dict_py_sort_per_idiom = pd.DataFrame.to_dict(
        df_py_sort_per_idiom, orient='index')
    output_filename = './py_freq_per_idiom_%s.json' % (name)
    with open(output_filename, 'w', encoding='utf-8') as outfile:
        json.dump(dict_py_sort_per_idiom, outfile,
                  ensure_ascii=False, indent=0)

    print('%s updated' % (output_filename))
    return dict_py_sort_per_idiom


def generate_answers(dict_py_sort_per_idiom, freq_threshold, output_filename):
    with open(output_filename, 'w', encoding='utf-8') as outfile:
        for key in dict_py_sort_per_idiom.keys():
            if dict_py_sort_per_idiom[key]['freq'] >= freq_threshold:
                outfile.write(key+'\n')
    print('%s updated' % (output_filename))


if __name__ == "__main__":
    generate_answers(update_dict('./总成语表.json', 'mandarin'),
                     10, 'answers_mandarin.txt')
    generate_answers(update_dict('./粤语成语表（香港拼音）.json',
                     'cantonese'), 10, 'answers_cantonese.txt')
